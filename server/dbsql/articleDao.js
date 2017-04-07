var article=require('../models/article');
var dbcommon=require('./common/dbCommon');


/** 
 * 调用公共add方法并且传入操作数据库的模型user 
 * @returns {Function} 
 */  
exports.addArticle = function(conditions,callback) { 
    dbcommon.addData(article,conditions,function(result) {  
        callback(result);    
    });   
};  

/** 
 * 调用公共remove方法并且传入操作数据库的模型user 
 * @param conditions 
 * @param dbcommon 
 * @param callback 
 */   
exports.removeArticle = function(conditions,callback){	
	dbcommon.removeData(article,conditions,function(results){
		callback(results);
	})
}
/** 
 * 调用公共update方法并且传入操作数据库的模型user 
 * @param conditions 
 * @param update 
 * @param options 
 * @param dbcommon 
 * @param callback 
 */
 exports.updateArticle = function(conditions,update,options,callback){
 	dbcommon.updateData(article,conditions,update,options,function(results){
 		callback(results);
 	});
 }

/** 
 * 调用公共update方法并且传入操作数据库的模型user 
 * @param conditions 
 * @param dncommon 
 * @param callback 
 */
 exports.findArticle = function(conditions,fields,options,callback){
 	dbcommon.findData(article,conditions,fields,options,function(results){
 		callback(results);
 	})
 }
  exports.findArticleById = function(id,callback){
 	dbcommon.findDataById(article,id,function(results){
 		callback(results);
 	})
 }
 exports.findArticleByKey = function(data,callback){
 	dbcommon.findDataByKey(article,data,function(results){
 		callback(results);
 	})
 }