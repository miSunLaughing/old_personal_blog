import React,{Component} from 'react';
import ArticleList from '../ArticleList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const styles = { 
  container: {
    textAlign: 'center'    
  },
};
class  Tags extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    let tag=this.props.tags.tag;
    if(tag){
      return;
    }
    let data='key='+this.props.params.tag;
    console.log(this.props.params.tag);
    this.props.actions.searchList(data);
  }
  render(){
    return (
      <div style={styles.container}>    
            <ArticleList dataSource={this.props.listData} />   
      </div>
    );    
  }
}
const mapStateToPops=(state)=>{
  return {
    listData:state.searchArticleList,
    tags:state.tags
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}
module.exports=connect(mapStateToPops,mapDispatchToProps)(Tags);