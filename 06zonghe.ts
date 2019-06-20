/* 
  TypeScript类型、接口、类、泛型综合使用
  封装统一操作数据库mysql mongDB Mssql的底层库
*/
/* 功能：定义一个操作数据库的库 支持mysql mongdb mssql
  要求1：mysql mssql mongdb功能一样 都有 add update delete get方法
  注意:统一的约束规范、以及代码重用
  解决方案：需要约束规范所以要定义接口，需要代码重用所以想到泛型
    1.接口：在面向对象编程中，接口是一种规范的定义，它定义了行为和动作的规范
    2.泛型：通俗理解，泛型就是解决类，接口，方法的复用性。
*/
interface DBI<T>{
  add(info:T):boolean;
  update(info:T,id:number):boolean;
  delete(id:number):boolean;
  get(id:number):any[];
}
//定义一个操作mysql数据库的类
class MysqlDb<T> implements DBI<T>{//注意 要实现泛型接口  这个类也应该是一个泛型类 这里有2个T
  add(info: T): boolean {
    console.log(info);
    return true;
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        title:"哈哈哈",
        dec:"mmm"
      }
    ]
    return list;
  }
}

class MssqlDB<T> implements DBI<T>{
  constructor(){
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log(info);
    return true;
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        title:"哈哈哈",
        dec:"xxx"
      }
    ]
    return list;
  }
}

// 操作用户表 定义一个User类和数据表做映射
class User{
  username:string | undefined;
  password:string | undefined;
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

var oMysql = new MysqlDb<User>();
var data = oMysql.get(4);
console.log(data);