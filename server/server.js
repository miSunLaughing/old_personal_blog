var express=require('express');
var formidable=require('formidable');
var bodyParser = require('body-parser');
var fs=require('fs');
//body解析中间件
// parse application/json
var articleController=require('./controller/articleController');


var app=express();
var path=require('path');
// 配置站点静态文件
app.use(express.static(path.join(__dirname,'../build')));
app.set('port',8080);
var server='zhongwenhao.cn';
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/myBlog/add', function(req,res){
	articleController.articleAdd(req, res);
});
app.post('/myBlog/findList', function(req,res){
	articleController.articleFind(req, res);
});
app.post('/myBlog/findKey', function(req,res){
	articleController.articleFindByKey(req, res);
});
app.post('/myBlog/findById', function(req,res){
	articleController.articleFindById(req, res);
});
app.post('/uploader',function(req,res){	
	// 使用第三方的 formidable 插件初始化一个 form 对象
	var form = new formidable.IncomingForm();
	form.uploadDir=path.join(__dirname,'../build/uploader/images');
	// 处理 request
	form.parse(req, function (err, fields, files) {
		if (err) {
			return console.log('图片上传错误！');
		}
		var item;
		// 计算 files 长度
		var length = 0;
		for (item in files) {
			length++;
		}
		if (length === 0) {
			console.log('上传文件中没有数据！');
			return;
		}
		for (item in files) {
			var file = files[item];
			// formidable 会将上传的文件存储为一个临时文件，现在获取这个文件的目录
			var tempfilepath = file.path;
			// 获取文件类型
			var type = file.type;

			// 获取文件名，并根据文件名获取扩展名
			var filename = file.name;
			var extname = filename.lastIndexOf('.') >= 0
							? filename.slice(filename.lastIndexOf('.') - filename.length)
							: '';
			// 文件名没有扩展名时候，则从文件类型中取扩展名
			if (extname === '' && type.indexOf('/') >= 0) {
				extname = '.' + type.split('/')[1];
			}
			// 将文件名重新赋值为一个随机数（避免文件重名）
			filename = Math.random().toString().slice(2) + extname;

			// 构建将要存储的文件的路径			
			var filenewpath = path.join(form.uploadDir, filename);
			// 将临时文件保存为正式的文件
			fs.rename(tempfilepath, filenewpath, function (err) {
				// 存储结果
				var result = '';

				if (err) {
					// 发生错误
					console.log('fs.rename 出错');
					result = 'error|保存失败';
				} else {
					// 保存成功
					console.log('fs.rename 完成');
					// 拼接图片url地址
					result = 'http://' + server + '/uploader/images/' + filename;
				}
				
				// 返回结果
				res.writeHead(200, {
					'Content-type': 'text/html'
				});
				res.end(result);
			});
		} 
	});
});
app.listen(app.get('port'),function(){
	console.log('myBlog is listening at 127.0.0.1:'+app.get('port'));
})
