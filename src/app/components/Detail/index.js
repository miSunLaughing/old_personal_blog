import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';
class ArticleDetail extends Component{
    constructor(props){
        super(props);        
    }
    componentDidMount(){
        let id=this.props.params.id;
        let data='id='+id;
        this.props.actions.getItem(data);   
    }
    render(){
        return (
            <div className="articleDetail">
                <div dangerouslySetInnerHTML={{__html: this.props.data.content}}></div> 
            </div>
        );
    }
};
const mapStateToProps=(state)=>{
    return {
        data:state.articleDetail
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}
module.exports=connect(mapStateToProps,mapDispatchToProps)(ArticleDetail);



// <script type="text/javascript" >
//     var duoshuoQuery = {short_name:"zhongwenhao"};
// </script>

//     this.state.id=id;
//     this.state.title='test';
//     this.state.url=location.href;
//     var ds = document.createElement('script');
//     ds.type = 'text/javascript';
//     ds.async = true;
//     ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
//     ds.charset = 'UTF-8';
//     document.getElementsByTagName('body')[0].appendChild(ds); 
//     this.state={
//         id:'',
//         title:'',
//         url:''
//     }
//  <div className="ds-thread" data-thread-key={this.state.id} data-title={this.state.title} data-url={this.state.url}></div> 


// let url='http://www.zhongwenhao.cn/#/blog/article/detail/'+this.props.params.id;
// let htmlContent=this.props.data.content+
//                 '<div class="ds-thread" data-thread-key="'+this.props.params.id+'" data-title="ZWH-B" data-url="'+url+'"></div>'+
//                 '<script type="text/javascript">'+
//                     'var duoshuoQuery = {short_name:"zhongwenhao"};'+
//                     '(function() { var ds = document.createElement("script");'+
//                         'ds.type = "text/javascript";'+
//                         'ds.async = true;'+
//                         'ds.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//static.duoshuo.com/embed.js";'+
//                         'ds.charset = "UTF-8";'+ 
//                         '(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(ds);'+
//                     '})();console.log("fuck")'+ 
//                 '</script>;';


