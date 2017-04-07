//公共添加方法
/** 
 * 公共Add方法 
 * @param model 要操作数据库的模型 
 * @param conditions 增加的条件,如{id:xxx} 
 * @param callback 回调方法 
 */  
exports.addData=function(model,conditions,callback){
	model.create(conditions, function(err,result){  
        if(err) {  
            console.log(err);  
            callback({flag:0,info:"save data fail"});  
        } else {    
            console.log('save success');  
            callback({
                flag:1,
                info:"save data success",
                result:result
            });  
        }  
    });  
}
//公共删除方法
/** 
 * 公共remove方法 
 * @param model 
 * @param conditions 
 * @param callback 
 */ 
 exports.removeData=function(model,conditions,callback){
 	 model.remove(conditions, function(error,result) {  
        if (error) {  
            console.log(error);  
            callback({flag: 0, info: "remove data fail"});  
        } else {  
            if(result.length!=0){  
                console.log('remove success!');  
                callback({
                    flag: 1, 
                    info: "remove data success",
                    result:result
                });  
            }  
            else{  
                console.log('remove fail:no this data!');  
                callback({flag:0, info: 'remove fail:no this data!'});  
            }  
  
        }  
    }); 
 }
//公共修改方法
/** 
 * 公共update方法
 * @param model 要操作数据库的模型 
 * @param conditions 增加的条件,如{id:xxx} 
 * @param update 更新条件{set{id:xxx}} 
 * @param options  
 * @param callback 
 */  
 exports.updateData=function(model,conditions,update,options,callback){
 	model.update(conditions,update,options,function(err,result){
 		if(err){
 			console.log(err);
 			callback({flag:0,info:"update data fail"});
 		}else{
 			if(result.length !=0){
 				console.log('remove success');
 				callback({
                    flag:1,
                    info:'update data success',
                    result:result
                });
 			}else{
 				console.log('remove fail');
 				callback({flag:0,info:'update data fail'});
 			}
 		}
 	});
 }
//非关联查询方法
/** 
 * 公共find方法 非关联查找 
 * @param model 
 * @param conditions 
 * @param fields 查找时限定的条件，如顺序，某些字段不查找等 
 * @param options 
 * @param callback 
 */  
 exports.findData=function(model,conditions,fields,options,callback){
 	model.find(conditions,fields,options,function(err,result){
 		if(err){
 			console.log(err);
 			callback({flag:0,info:'find data fail'});
 		}else{
 			if(result.length!=0){
                console.log('find  success');
                callback({
                    flag:1,
                    info:'find data success',
                    result:result
                });
            }else{
                callback({flag:0,ifno:'find success, no data'});
            }
 		}
 	});
 }
 exports.findDataById=function(model,id,callback){
    model.findById(id,function(err,result){
        if(err){
            console.log(err);
            callback({flag:0,info:'find data fail'});
        }else{
            if(result.length!=0){
                console.log('find  success');
                callback({
                    flag:1,
                    info:'find data success',
                    result:result
                });
            }else{
                callback({flag:0,ifno:'find success, no data'});
            }
        }
    });
 }
 exports.findDataByKey=function(model,data,callback){
    model.find(data,function(err,result){
        if(err){
            console.log(err);
            callback({flag:0,info:'find data fail'});
        }else{
            if(result.length!=0){
                console.log('find  success');
                callback({
                    flag:1,
                    info:'find data success',
                    result:result
                });
            }else{
                callback({flag:0,ifno:'find success, no data'});
            }
        }
    });
 }