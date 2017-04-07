import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import { Link, IndexLink,useRouterHistory} from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';
import {teal50,teal100,teal300,teal400,teal500,teal700} from 'material-ui/styles/colors';
import AutoComplete from 'material-ui/AutoComplete';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const style={	
	searchBox:{
		width:'50%',
		margin:'0 auto'	
	},
	listStyle:{
		backgroundColor:teal50
	}
}
class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			dataSource:['javascript','css','html'],
			about:false
		}
	}	
	handleUpdateInput(value){	
		//此处一定要加上防抖函数
		const path = "/blog/article/search?keyword="+value;
     	appHistory.push(path);
     	if(!value){return;}	
		// this.props.actions.search(keyword);
	}
	handleUpdateSelect(value){
		if(!value){return;}	
		const path = "/blog/article/search?keyword="+value;
     	appHistory.push(path);     	
		// this.props.actions.search(keyword);
	}
	changeSearchState(value){	
		//redux实现在加载关于组建的时候，搜索框不再出现
		// onTouchTap={()=>this.changeSearchState(false)}
		this.props.actions.isShowSearch({isShowSearch:value});

	}	
	render(){
		return(
			<div>					
				{
					(!this.props.show.isShowSearch)?'':(
						<div style={style.searchBox} >
							<AutoComplete
								hintText='关键词'	
								dataSource={this.state.dataSource}
								filter={AutoComplete.fuzzyFilter}
								openOnFocus={true}	 
								onUpdateInput={(value)=>{this.handleUpdateInput(value)}}
								onNewRequest={(value)=>{this.handleUpdateSelect(value)}}
								floatingLabelText="搜索文章"						
								fullWidth={true}	
								listStyle={style.listStyle}																	
				           	/>
						</div>	
					)					
				}		
			</div>
		);
	}
	
};
const mapStateToProps=(state)=>{
	return {
		show:state.show
	};
}
const mapDispatchToProps=(dispatch)=>{
	return {
		actions:bindActionCreators(actions,dispatch)
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Header); 