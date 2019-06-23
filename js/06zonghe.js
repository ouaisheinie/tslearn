"use strict";
//定义一个操作mysql数据库的类
class MysqlDb {
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        var list = [
            {
                title: "哈哈哈",
                dec: "mmm"
            }
        ];
        return list;
    }
}
class MssqlDB {
    constructor() {
        console.log("数据库建立连接");
    }
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        var list = [
            {
                title: "哈哈哈",
                dec: "xxx"
            }
        ];
        return list;
    }
}
// 操作用户表 定义一个User类和数据表做映射
class User {
}
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
