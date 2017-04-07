// 各种颜色名称以及详细信息

const colors={
	1:{
		nameC:'艳红',
		nameE:'yanhong',
		data:'cc3536',
	},
	2:{
		nameC:'猩红',
		nameE:'xinghong',
		data:'c43739',
	},
	3:{
		nameC:'绛紫',
		nameE:'jiangzi',
		data:'704d4e',
	},
	4:{
		nameC:'银朱',
		nameE:'yinzhu',
		data:'dd3b44',
	},
	5:{
		nameC:'浅血牙',
		nameE:'qianxueya',
		data:'eacdd1',
	},
	6:{
		nameC:'月季红',
		nameE:'yuejihong',
		data:'bb1c33',
	},
	7:{
		nameC:'玫瑰红',
		nameE:'meiguihong',
		data:'973444',
	},
	8:{
		nameC:'枣红',
		nameE:'zaohong',
		data:'89303f',
	},
	9:{
		nameC:'洋红',
		nameE:'yanghong',
		data:'dc143c',
	},
	10:{
		nameC:'粉紫',
		nameE:'fenzi',
		data:'a54358',
	},
	11:{
		nameC:'茄皮紫',
		nameE:'qiepizi',
		data:'674950',
	},
	12:{
		nameC:'深烟红',
		nameE:'shenyanhong',
		data:'643441',
	},
	13:{
		nameC:'雪紫',
		nameE:'xuezi',
		data:'79485a',
	},
	14:{
		nameC:'玫瑰灰',
		nameE:'meiguihui',
		data:'793d56',
	},
	15:{
		nameC:'洋葱紫',
		nameE:'yangcongzi',
		data:'9c6680',
	},
	16:{
		nameC:'元青',
		nameE:'yuanqing',
		data:'3e3c3d',
	},
	17:{
		nameC:'品红',
		nameE:'pinghong',
		data:'a71368',
	},
	18:{
		nameC:'紫薇花',
		nameE:'ziweihua',
		data:'eea5d1',
	},
	19:{
		nameC:'牵牛紫',
		nameE:'qianniuzi',
		data:'a22076',
	},
	20:{
		nameC:'紫水晶',
		nameE:'zishuijing',
		data:'c3a6cb',
	},
	21:{
		nameC:'浅石英紫',
		nameE:'qianshiyingzi',
		data:'ab96c5',
	},
	22:{
		nameC:'柏坊灰蓝',
		nameE:'bofanghuilan',
		data:'4e1892',
	},
	23:{
		nameC:'紫藤灰',
		nameE:'zitenghui',
		data:'857e95',
	},
	24:{
		nameC:'浅藤紫',
		nameE:'qiantengzi',
		data:'c4c3cb',
	},
	25:{
		nameC:'宝蓝',
		nameE:'baolan',
		data:'1f3696',
	},
	26:{
		nameC:'靛蓝',
		nameE:'dianlan',
		data:'1b54f2',
	},
	27:{
		nameC:'藏蓝',
		nameE:'zanglan',
		data:'25386b',
	},
	28:{
		nameC:'粗晶皂',
		nameE:'cujingzao',
		data:'43454a',
	},
	29:{
		nameC:'孔雀蓝',
		nameE:'kongquelan',
		data:'0041a5',
	},
	30:{
		nameC:'浅海昌蓝',
		nameE:'qianhaichanglan',
		data:'3c5e91',
	},
	31:{
		nameC:'花青',
		nameE:'huaqing',
		data:'546b83',
	},
	32:{
		nameC:'鹊灰',
		nameE:'quehui',
		data:'455667',
	},
	33:{
		nameC:'海蓝',
		nameE:'hailan',
		data:'17507d',
	},
	34:{
		nameC:'黛蓝',
		nameE:'dailan',
		data:'304758',
	},
	35:{
		nameC:'深竹月',
		nameE:'shengzuyue',
		data:'2578b5',
	},
	36:{
		nameC:'绒蓝',
		nameE:'ronglan',
		data:'31678d',
	},
	37:{
		nameC:'北京毛蓝',
		nameE:'beijingmaolan',
		data:'276893',
	},
	38:{
		nameC:'沙青',
		nameE:'shaqing',
		data:'2b5e7d',
	},
	39:{
		nameC:'钴蓝',
		nameE:'gulan',
		data:'6493af',
	},
	40:{
		nameC:'铁灰',
		nameE:'tiehui',
		data:'37444b',
	},
	41:{
		nameC:'红皂',
		nameE:'hongzao',
		data:'4f5355',
	},
	42:{
		nameC:'正灰',
		nameE:'zhenghui',
		data:'93a2a9',
	},
	43:{
		nameC:'玉石蓝',
		nameE:'yushilan',
		data:'507883',
	},
	44:{
		nameC:'天青',
		nameE:'tianqing',
		data:'2ec3e7',
	},
	45:{
		nameC:'灰蓝',
		nameE:'huilan',
		data:'5d828a',
	},
	46:{
		nameC:'春蓝',
		nameE:'chunlan',
		data:'7ba1a8',
	},
	47:{
		nameC:'织锦灰',
		nameE:'zhijinghui',
		data:'748a8d',
	},
	48:{
		nameC:'碧玉石',
		nameE:'biyushi',
		data:'569597',
	},
	49:{
		nameC:'沙绿',
		nameE:'shalv',
		data:'005b5a',
	},
	50:{
		nameC:'灰绿',
		nameE:'huilv',
		data:'5c8987',
	},
	51:{
		nameC:'翠绿',
		nameE:'cuilv',
		data:'006e5f',
	},
	52:{
		nameC:'卡其绿',
		nameE:'kaqilv',
		data:'647370',
	},
	53:{
		nameC:'果灰',
		nameE:'guohui',
		data:'88aea3',
	},
	54:{
		nameC:'鹦鹉绿',
		nameE:'yingwulv',
		data:'008e59',
	},
	55:{
		nameC:'鸭蛋青',
		nameE:'yadanqing',
		data:'d1e3db',
	},
	56:{
		nameC:'三绿',
		nameE:'sanlv',
		data:'90caaf',
	},
	57:{
		nameC:'承德皂',
		nameE:'chengdezao',
		data:'5a5c5b',
	},
	58:{
		nameC:'老绿',
		nameE:'laolv',
		data:'3d6e53',
	},
	59:{
		nameC:'奶绿',
		nameE:'nailv',
		data:'afc8ba',
	},
	60:{
		nameC:'浅灰绿',
		nameE:'qianhuilv',
		data:'aec4b7',
	},
	61:{
		nameC:'水貂灰',
		nameE:'shidiaohui',
		data:'949c97',
	},
	62:{
		nameC:'油绿',
		nameE:'youlv',
		data:'45554a',
	},
	63:{
		nameC:'锈绿',
		nameE:'xiulv',
		data:'b8c8b7',
	},
	64:{
		nameC:'水黄',
		nameE:'shuihuang',
		data:'bed2b6',
	},
	65:{
		nameC:'银箔',
		nameE:'yinbo',
		data:'585a57',
	},
	66:{
		nameC:'苍绿',
		nameE:'canglv',
		data:'4e5f45',
	},
	67:{
		nameC:'黄灰',
		nameE:'huanghui',
		data:'b0b7ac',
	},
	68:{
		nameC:'春绿',
		nameE:'chunlv',
		data:'e3efd1',
	},
	69:{
		nameC:'军绿',
		nameE:'junlv',
		data:'cad4ba',
	},
	70:{
		nameC:'大赤金',
		nameE:'dachijin',
		data:'6d7358',
	},
	71:{
		nameC:'芦灰',
		nameE:'luhui',
		data:'a9b08f',
	},
	72:{
		nameC:'米色',
		nameE:'mise',
		data:'f5f5dc',
	},
	73:{
		nameC:'油烟墨',
		nameE:'youyanmo',
		data:'3f3f3c',
	},
	74:{
		nameC:'承德灰',
		nameE:'chengdehui',
		data:'757570',
	},
	75:{
		nameC:'橄榄绿',
		nameE:'ganlanlv',
		data:'6a6834',
	},
	76:{
		nameC:'枯绿',
		nameE:'kulv',
		data:'b7b278',
	},
	77:{
		nameC:'柠檬黄',
		nameE:'ningmenghuang',
		data:'e9db39',
	},
	78:{
		nameC:'蜡白',
		nameE:'labai',
		data:'e7e5d0',
	},
	79:{
		nameC:'草黄',
		nameE:'caohuang',
		data:'dbce54',
	},
	80:{
		nameC:'灰米',
		nameE:'huimi',
		data:'b6b196',
	},
	81:{
		nameC:'藤黄',
		nameE:'tenghuang',
		data:'f2de76',
	},
	82:{
		nameC:'胡粉',
		nameE:'hufen',
		data:'ebe8db',
	},
	83:{
		nameC:'丹东石',
		nameE:'dandongshi',
		data:'d7c16b',
	},
	84:{
		nameC:'库金',
		nameE:'kujin',
		data:'85794f',
	},
	85:{
		nameC:'甘草黄',
		nameE:'gancaohuang',
		data:'e4cf8e',
	},
	86:{
		nameC:'灯草灰',
		nameE:'dengcaohui',
		data:'363532',
	},
	87:{
		nameC:'米灰',
		nameE:'mihui',
		data:'c5bfad',
	},
	88:{
		nameC:'姜黄',
		nameE:'jianghuang',
		data:'b49436',
	},
	89:{
		nameC:'选金',
		nameE:'xuanjin',
		data:'796f54',
	},
	90:{
		nameC:'浅棕灰',
		nameE:'qianzonghui',
		data:'e1dbcd',
	},
	91:{
		nameC:'将校呢',
		nameE:'jiangxiaoni',
		data:'6d614a',
	},
	92:{
		nameC:'卡其黄',
		nameE:'kaqihuang',
		data:'d5b884',
	},
	93:{
		nameC:'相思灰',
		nameE:'xiangsihui',
		data:'625c52',
	},
	94:{
		nameC:'枝黄',
		nameE:'zhihuang',
		data:'dbc7a6',
	},
	95:{
		nameC:'中棕灰',
		nameE:'zhongzonghui',
		data:'a9987c',
	},
	96:{
		nameC:'土黄',
		nameE:'tuhuang',
		data:'ce9335',
	},
	97:{
		nameC:'浅驼色',
		nameE:'qiantuose',
		data:'c9ae8c',
	},
	98:{
		nameC:'棕茶',
		nameE:'zongcha',
		data:'b8844f',
	},
	99:{
		nameC:'雄黄',
		nameE:'xionghuang',
		data:'d0853d',
	},
	100:{
		nameC:'纸棕',
		nameE:'zhizong',
		data:'bca590',
	},
	101:{
		nameC:'浅桔黄',
		nameE:'qianjuhuang',
		data:'da9558',
	},
	102:{
		nameC:'浅黄棕',
		nameE:'qianhuangzong',
		data:'dea87a',
	},
	103:{
		nameC:'金黄',
		nameE:'jinhuang',
		data:'c77a3a',
	},
	104:{
		nameC:'米红',
		nameE:'mihong',
		data:'e1bda2',
	},
	105:{
		nameC:'桔黄',
		nameE:'juhuang',
		data:'e8853b',
	},
	106:{
		nameC:'苍黄',
		nameE:'canghuang',
		data:'c65306',
	},
	107:{
		nameC:'雄精',
		nameE:'xiongjing',
		data:'e47542',
	},
	108:{
		nameC:'甘石粉',
		nameE:'ganshifen',
		data:'eadcd6',
	},
	109:{
		nameC:'章丹',
		nameE:'zhangdan',
		data:'eb652d',
	},
	110:{
		nameC:'桔红',
		nameE:'juhong',
		data:'e7693f',
	},
	111:{
		nameC:'奶棕',
		nameE:'naizong',
		data:'c1a299',
	},
	112:{
		nameC:'血红',
		nameE:'xuehong',
		data:'a03e28',
	},
	114:{
		nameC:'辰砂',
		nameE:'chensha',
		data:'af5e53',
	},
	115:{
		nameC:'十样锦',
		nameE:'shiyangjin',
		data:'fcbaaa',
	},
	116:{
		nameC:'番茄红',
		nameE:'fanqiehong',
		data:'c4473d',
	},
	117:{
		nameC:'榴花红',
		nameE:'liuhuahong',
		data:'d54b44',
	},
	118:{
		nameC:'胭脂',
		nameE:'yanzhi',
		data:'c03f3c',
	},
	119:{
		nameC:'妃红',
		nameE:'feihong',
		data:'c35655',
	},
	120:{
		nameC:'锈红',
		nameE:'xiuhong',
		data:'4d1919',
	},
	121:{
		nameC:'深烟',
		nameE:'shenyan',
		data:'5a4c4c',
	},
	122:{
		nameC:'雪色',
		nameE:'xuese',
		data:'fffafa',
	},
	123:{
		nameC:'百草霜',
		nameE:'baicaoshuang',
		data:'303030',
	},
};
module.exports=colors;