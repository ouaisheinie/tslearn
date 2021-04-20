/* 深入讲解泛型类 */
/* 
  定义一个User类，这个类的作用是映射数据库字段
  然后定义一个MysqlDB的类 这个类用于操作数据库
  然后把user类作为参数传入到MysqlDB中(把类传入另一个类)
*/
/* 1.把类作为参数 约束数据传入的类型 */
// class ArticleCate{
//   title:string | undefined;
//   desc:string | undefined;
//   status:number | undefined;
// }
// class MySqlDB{
//   //把上面的User类传入 当做了参数user的验证
//   add(info:ArticleCate):boolean{
//     console.log(info);
//     console.log(info.title);
//     return true;
//   }
// }

// var ar = new ArticleCate();
// ar.title = "国内";
// ar.desc = "国内新闻";
// ar.status = 1;

// var db = new MySqlDB();
// //把类的实例ar传进去
// db.add(ar);

/* 下面用泛型来改写 MySqlDB*/
class MySqlDB<T>{
  add(info:T):boolean{
    console.log(info);
    return true;
  }
  update(info:T,id:number):boolean{
    console.log(info);
    console.log(id);
    return true;
  }
}
//给user表增加数据
// 先定义一个user类  然后和数据库进行映射
/* class User{
  username:string | undefined;
  password:string | undefined;
}

var u = new User();
u.username = "张三";
u.password = "123456";

var DB = new MySqlDB<User>();//这一步很重要
DB.add(u); */
// DB.add("123445");//错误写法

//给ArticleCate表增加数据
//先定义一个ArticleCate类 然后和数据库进行映射
class ArticleCate{
  title:string | undefined;
  desc:string | undefined;
  status:number | undefined;
  constructor(params:{
    title:string | undefined,
    desc:string | undefined,
    status?:number | undefined
  }){
    this.title = params.title;
    this.desc = params.desc;
    this.status = params.status;
  }
}
//增加操作
// var ar = new ArticleCate({
//   title:"分类",
//   desc:"1111",
//   status:1
// });
// var DB2 = new MySqlDB<ArticleCate>();
// DB2.add(ar);
var ar = new ArticleCate({
  title: "分类",
  desc: "1111",
});
ar.status = 0;
var DB3 = new MySqlDB<ArticleCate>();
DB3.update(ar,12);