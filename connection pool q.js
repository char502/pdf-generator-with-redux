
 $ yarn install
 $ git add yarn.lock
 $ git commit -m "Updated Yarn lockfile"
 $ git push heroku master


USE sows;
SELECT product_family AS Product_Family, product_config AS Product_config
  FROM product_familes, product_configs
  WHERE idprod_family = product_familes_idprod_family
  ORDER BY product_config;
 
 
server.js

var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var rest = require("./REST.js");
var app  = express();

function REST(){
    var self = this;
    self.connectMysql();
};

REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 50,
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'quiz',
        debug    :  false,
        multipleStatements: true
    });
    pool.getConnection(function(err,connection){
        if(err) {
          self.stop(err);
        } else {
          self.configureExpress(connection);
        }
    });
}

REST.prototype.configureExpress = function(connection) {
      var self = this;
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      var router = express.Router();
      app.use('/', router);
      var rest_router = new rest(router,connection);
      self.startServer();
}

REST.prototype.startServer = function() {
      app.listen(3000,function(){
          console.log("All right ! I am alive at Port 3000.");
      });
}

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
}

new REST();