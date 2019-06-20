"use strict";
//定义一个操作mysql数据库的类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        var list = [
            {
                title: "哈哈哈",
                dec: "mmm"
            }
        ];
        return list;
    };
    return MysqlDb;
}());
var MssqlDB = /** @class */ (function () {
    function MssqlDB() {
        console.log("数据库建立连接");
    }
    MssqlDB.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MssqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.get = function (id) {
        var list = [
            {
                title: "哈哈哈",
                dec: "xxx"
            }
        ];
        return list;
    };
    return MssqlDB;
}());
// 操作用户表 定义一个User类和数据表做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = "张三";
u.password = "123456";
/* 注意  在实例化一个类的时候  必须把约定的泛型 也传进去 */
// var oMysql = new MysqlDb<User>();
// oMysql.add(u);
// var oMssql = new MssqlDB<User>();
// oMssql.add(u);
// var oMssql = new MssqlDB<User>();
// var data = oMssql.get(4);
// console.log(data);
var oMysql = new MysqlDb();
var data = oMysql.get(4);
console.log(data);
