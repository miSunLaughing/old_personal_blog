import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { Link, IndexLink,useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';
import {teal50} from 'material-ui/styles/colors';
import AutoComplete from 'material-ui/AutoComplete';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const style={
	listStyle:{
		backgroundColor:teal50
	}
}
class SearchBox extends Component{
	constructor(props){
		super(props);
	}
	handleUpdateSelect(value){
		this.props.actions.keyWordsParams({keyWord:value});
		let data='key='+value;
		this.props.actions.searchList(data);
		const path = "/blog/article/search/"+value;
     	appHistory.push(path);  
}
	render(){
		return(
			<div>
				<AutoComplete
					hintText='关键词'	
					dataSource={this.props.listData.tags || ['html','css','javascript']}
					filter={AutoComplete.fuzzyFilter}
					openOnFocus={true}	
					onNewRequest={(value)=>{this.handleUpdateSelect(value)}}
					floatingLabelText="搜索文章"						
					fullWidth={true}	
					listStyle={style.listStyle}																	
	           	/>	
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
export default connect(mapStateToProps,mapDispatchToProps)(SearchBox); ; 