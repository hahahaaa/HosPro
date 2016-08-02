
var fs = require('fs');
var util = require('./../util');
var HOME_PATH = './database/home.json';
var ACTIVE_PATH = './database/active.json';


var Home = {

    init: function(app){
        app.get('/home/home', this.getHome);
        app.get('/home/active', this.getActive);
    },

    //获取信息
    getHome: function(req, res){
        fs.readFile(HOME_PATH, function(err, data){
            if(!err){
                try{
                    var obj = JSON.parse(data);
                    return res.json(obj);
                }catch(e){
                    return res.send({
                        status: 0,
                        err: e
                    });
                }
            }
            return res.send({
                status: 0,
                err: err
            });
        });
    },

    getActive:function(req, res){
        fs.readFile(ACTIVE_PATH, function(err, data){
            if(!err){
                try{
                    var obj = JSON.parse(data);
                    return res.json(obj);
                }catch(e){
                    return res.send({
                        status: 0,
                        err: e
                    });
                }
            }
            return res.send({
                status: 0,
                err: err
            });
        });

    },
};


module.exports = Home;