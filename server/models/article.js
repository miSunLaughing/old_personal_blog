var mongoose=require('mongoose');
var db=require('../dbsql/common/dbConnect');
var ArticleSchema= new mongoose.Schema({
	id:{type:String},  			
	date:{type:String},
	title:{type:String},
	avatar:{type:String},
	des:{type:String},
	key:{type:String},
	content:{type:String}
});
module.exports=db.model('article',ArticleSchema);