var articleDao=require('../dbsql/articleDao'); 
  
exports.articleAdd = function(req, res) { 
	// 文章id，不用处理，mongodb会自动添加_id字段
    //调用Dao的add方法来使用user模型来增加  
    articleDao.addArticle(req.body,function(result){ 
		res.send(result); 
    });  
}  
//文章查询列表
// 文章查询需要的入参
// @ conditions
// @ fields
// @ options
exports.articleFind= function(req, res) { 
    //调用Dao的add方法来使用user模型来增加 
    var reqInfo=req.body;
    if(!reqInfo.conditions){
    	reqInfo.conditions={};
    }
    if(!reqInfo.fields){
    	reqInfo.fields={};
    }
    if(!reqInfo.options){
    	reqInfo.options={};
    }
    console.log(reqInfo);
    articleDao.findArticle(reqInfo.conditions,reqInfo.fields,reqInfo.options,function(result){ 
		res.send(result); 
    });  
}

exports.articleFindById= function(req, res) { 
    //调用Dao的add方法来使用user模型来增加     
    var reqInfo=req.body;
    if(!reqInfo.id){
        res.send("id不能为空！");
        return;
    }
    articleDao.findArticleById(reqInfo.id,function(result){ 
        res.send(result); 
    });  
}
exports.articleFindByKey= function(req, res) { 
    //调用Dao的add方法来使用user模型来增加     
    var reqInfo=req.body;
    if(!reqInfo.key){
        res.send("查询条件不能为空！");
        return;
    }
    console.log(reqInfo.key);
    articleDao.findArticleByKey({'key':reqInfo.key},function(result){ 
        res.send(result); 
    });  
}