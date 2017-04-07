import React ,{Component}from 'react';
import ArticleList from '../ArticleList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const styles = { 
  container: {
    textAlign: 'center'    
  },
};
class  Search extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    if(!this.props.keyWords.keyWord){return;}
    let keyWords=this.props.params.keyWords;
    let data='key='+keyWords;
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
    keyWords:state.keyWords
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    actions:bindActionCreators(actions,dispatch)
  }
}
module.exports=connect(mapStateToPops,mapDispatchToProps)(Search);