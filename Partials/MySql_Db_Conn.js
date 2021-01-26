const mysql = require("mysql");
const GLOBALS = require('./Globals');
class BD {
    constructor(_host, _user, _password, _database) {
        this.conn = mysql.createConnection({
            host: _host,
            user: _user,
            password: _password,
            database: _database
        });
        this.connection = true;
    }
    startConnecction() {
        this.conn.connect(err => {
            if (err) {
                this.connection = false;
                return this.connection;
            }
            return this.connection;
        })
    }
    killConnection() {
        this.conn.end(err=>{
            if(err) throw err;
            console.log("Close");
        });
    }
    getEncuestas(callback) {
        var query = `SELECT * FROM encuesta`;
        this.conn.query(query, (err, res, fields) => {
            if (err) {
                throw err;
            } else {
                var temp = JSON.stringify(res);
                var result = JSON.parse(temp);

                callback({}, result);
            }
  
        });
    }
}
var _BD = new BD(
    GLOBALS.BASE_DE_DATOS.HOST,
    GLOBALS.BASE_DE_DATOS.USER,
    GLOBALS.BASE_DE_DATOS.PASSWORD,
    GLOBALS.BASE_DE_DATOS.DATA_BASE
);
module.exports = _BD;

