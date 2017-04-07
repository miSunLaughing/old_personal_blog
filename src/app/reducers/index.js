import {combineReducers} from 'redux';

import config from '../colors.config';
//产生随机数
const normal=Math.round(Math.random(0,1) * Object.keys(config).length);
//获取到随机主题色
const normalData=config[normal];

//首页的主题颜色更改
const  indexColor=(state={
	color:normalData,
	historyColor:[]
},action)=>{
	switch(action.type){
		case 'currentColor':
			if(state.historyColor.length>15){
				state.historyColor.shift();
			}
			state.historyColor.push(action.data.color);
			return Object.assign({},state,action.data);
		default:
			return state;
	}
}
//index的自动补全标签
const  search=(state={
	search:['html','css','javascript']
},action)=>{
	switch(action.type){
		case 'search' :
			return Object.assign({},state,action.data);
		default:
			return state;
	}
}
//about的tags
const  show=(state={
	isShowSearch:true
},action)=>{
	switch(action.type){
		case 'isShowSearch' :
			return Object.assign({},state,action.data);
		default:
			return state;
	}
}
//article list
const articleList=(state={},action)=>{	
	switch(action.type){
		case 'articleList' :
			//对数据的标签进行去重处理
			let info=[],infoList={},keyList=[];
			const data=action.data;
			if(data.length){
				for(var num in data){
					info.push(data[num].key);
				}
			}			
			info.sort(); //先排序
			// 处理第一个
			let res = [{
				key:info[0],
				num:1
			}];
			for(let i = 1; i < info.length; i++){				
			 	if(info[i] !== res[res.length - 1].key){
			 		let tag={};
			 		tag.key=info[i];
			 		tag.num=1;
		 			res.push(tag);
		 			keyList.push(info[i]);
			 	}else{
			 		res[res.length - 1].num++;
			 	}
			}
			infoList.dataList=data;
			infoList.tagList=res;
			infoList.tags=keyList;
			return Object.assign({},state,infoList);
		default:
			return state;
	}
}
//article detail 
const articleDetail=(state={},action)=>{
	switch(action.type){
		case 'acticleItem' :
			return Object.assign({},state,action.data);
		default:
			return state;
	}
}
//get search list
const searchArticleList=(state={},action)=>{
	switch(action.type){
		case 'searchArticleList' :
			return Object.assign({},action.data);
		default:
			return state;
	}
}
const tags=(state={},action)=>{
	switch(action.type){
		case 'tags' :
			return Object.assign({},state,action.data);
		default:
			return state;
	}
}
const keyWords=(state={},action)=>{
	switch(action.type){
		case 'keyWords' :
			return Object.assign({},state,action.data);
		default:
			return state;
	}
}
const reducers = combineReducers({search,show,indexColor,articleList,articleDetail,searchArticleList,tags,keyWords});
export default reducers;