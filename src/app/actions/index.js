


const IsShowSearch = 'isShowSearch';
const CurrentColor='currentColor';
const ArticleList='articleList';
const ActicleItem='acticleItem';
const SearchArticleList='searchArticleList';
const Tags='tags';
const KeyWords = 'KeyWords';

export const changeTheme=(data)=>{
	return {
		type:CurrentColor,
		data:{
			color:data,
		}
	}
}
//文章列表
const findArticleList=(dispatch,data)=>{
	fetch('/myBlog/findList',{
		method: "POST",
		headers: {
	        "Content-Type": "application/x-www-form-urlencoded"
      	},
		body: data
	})
	.then(function(rs){
		return rs.json();
	}).then(function(data){		
		dispatch(list(data.result));				
	});
};
const list=(data)=>{	
	return {
		type: ArticleList,
		data: data
	};
}
export  const getList=(data)=>{
	return (dispatch)=>{
		return findArticleList(dispatch,data);		
	}
}


//搜索文章
const findArticleDetail=(dispatch,data)=>{
	fetch('/myBlog/findById',{
		method: "POST",
		headers: {
	        "Content-Type": "application/x-www-form-urlencoded"
      	},
		body: data
	})
	.then(function(rs){
		return rs.json();
	}).then(function(data){		
		dispatch(item(data.result));				
	});
};
const item=(data)=>{	
	return {
		type: ActicleItem,
		data: data
	};
}
export  const getItem=(data)=>{
	return (dispatch)=>{
		return findArticleDetail(dispatch,data);
		
	}
}
//search 文章列表
const searchArticleList=(dispatch,data)=>{
	fetch('/myBlog/findKey',{
		method: "POST",
		headers: {
	        "Content-Type": "application/x-www-form-urlencoded"
      	},
		body: data
	})
	.then(function(rs){
		return rs.json();
	}).then(function(data){		
		dispatch(search(data.result));				
	});
};
//get search list
export const searchList=(data)=>{
	return (dispatch)=>{
		return searchArticleList(dispatch,data);
	}
}
const search=(data)=>{	
	return {
		type: SearchArticleList,
		data: data
	};
}
export const tagParams=(data)=>{
	return {
		type: Tags,
		data: data
	}
}
export const keyWordsParams=(data)=>{
	return {
		type:KeyWords,
		data:data
	}
}