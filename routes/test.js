var express = require('express');

var router = express.Router();

var mysql = require('mysql')

var sqlConfig = require('../config/mysql');

var pool = mysql.createPool( sqlConfig );

var responseJSON = function(res,ret){
    if(typeof ret == 'undefined'){
        res.json({code:"-200",msg:"操作失败"});
    }else{
        res.json(ret);
    }
};

router.get('/', function(req, res, next) {
    pool.getConnection(function(err,connection){
		connection.query('SELECT * FROM user',function(err,result){
		    //将结果以json形式返回到前台
		    responseJSON(res,result);
		    //释放链接
		    connection.release();
		})
	})
});


module.exports = router;