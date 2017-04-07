var mongoose=require('mongoose');
//db地址，请根据自己情况配置
var db=mongoose.connect('mongodb://xxxxxxxxxxxxx');
module.exports=db;