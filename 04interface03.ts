/* 函数类型接口 */
//作用：对方法传入的参数以及返回值进行约束
//加密的函数类型接口
// interface encrypt {
//   (key:string,value:string):string
// }

// var md5:encrypt = function(key:string,value:string):string{
//   //模拟操作
//   return key + value;
// }

// console.log(md5("name"," value"));

// var sha1:encrypt = function(key:string,value:string):string{
//   return "nm$l";
// }
// console.log(sha1("张泽悠","在敲代码"));
////////////////////////////////////////////////////////////////////////////////
/* 可索引接口 对数组的元素*/
//用于数组和对象的元素
// interface UserArr{ //可索引接口
//   [index:number]:string
// }
// var arri:UserArr = ["1234","2222"];
// console.log(arri[1]);

/* 可索引接口 对对象的元素*/
// interface UserObj{
//   [index:string]:string
// };
// var objo:UserObj = {
//   name:"张三"
// }
// console.log(objo);

/////////////////////////////////////////////////////////////////////////////////
/* 类类型接口：对类的约束 和 抽象类有点像 */
// interface Animal3{
//   name:string;
//   eat222(str:string):void;
// }
// class Dog3 implements Animal3{
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   eat222():void{
//     console.log(this.name + "吃东西");
//   }
// }

// var d3 = new Dog3("小黑");
// d3.eat222();

// class Cat3 implements Animal3{
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   eat222(food:string){
//     console.log(this.name + "吃" + food);
//   }
// }

// var c3 = new Cat3("花");
// c3.eat222("老鼠");
///////////////////////////////////////////////////////////////////////////////////
/* 接口的扩展  和  继承 */
interface Animal4{
  eat():void;
}
//接口继承
interface Person4 extends Animal4{
  work():void;
}
class Programer4 {
  public name:string;
  constructor(name:string){
    this.name = name;
  }
  coding(code:string){
    console.log(this.name + code)
  }
}

class Web4 extends Programer4 implements Person4{ //继承 外加  实现接口z
  constructor(name:string){
    super(name);
  }
  eat(){
    console.log(this.name + "喜欢吃馒头");
  }
  work(){
    console.log(this.name + "工作是写代码");
  }
}
var w4 = new Web4("黄淇");
w4.eat();
w4.work();
w4.coding("在撸");