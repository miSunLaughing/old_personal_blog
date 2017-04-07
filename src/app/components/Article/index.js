import React ,{Component}from 'react';
import {bindActionCreators} from 'redux';
import { Link, IndexLink,useRouterHistory} from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ArticleList from '../ArticleList';
import KeyList from '../ArticleList/KeyList';
import {teal50} from 'material-ui/styles/colors';
import AutoComplete from 'material-ui/AutoComplete';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import SearchBox from '../SearchBox';

const styles = { 
  container: {
    textAlign: 'left'    
  },
  listItem:{
    textAlign: 'left'
  },
  listStyle:{
    backgroundColor:teal50
  } 
};
const data=['java','test','css','html']
class Article extends Component{
  constructor(props){
    super(props);
  }  
  componentDidMount(){
    this.props.actions.getList({});
  }
  handleUpdateInput(value){ 
    //此处一定要加上防抖函数
    const path = "/blog/article/search/"+value;
      appHistory.push(path);
      if(!value){return;}
      this.props.actions.getList({fields:'key='+value});  
  }
  handleUpdateSelect(value){
    if(!value){return;} 
    const path = "/blog/article/search/"+value;
      appHistory.push(path);  
      if(!value){return;}
      this.props.actions.getList({fields:'key='+value});  
  }  
  render(){
    return(
      <div>   
        <div className="search-box">
         <SearchBox/>
        </div>
        <div className="list">
            <div style={styles.container} className="article-list"> 
                {this.props.children || <ArticleList dataSource={this.props.listData.dataList} />}            
            </div>
            <div className="info-list">
                <KeyList dataSource={this.props.listData.tagList} />
            </div>
        </div> 
      </div>          
    );
  }
};
const mapStateToProps=(state)=>{
  return {
    listData:state.articleList
  };
}
const mapDispatchToProps=(dispatch)=>{
  return {
    actions:bindActionCreators(actions,dispatch)
  };
}
module.exports=connect(mapStateToProps,mapDispatchToProps)(Article);