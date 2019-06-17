"use strict";
/* ts中通过class关键字来定义类 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ts中定义类
/*
 class Person{
  name:string;//定义属性 前面省略了public关键词 公共属性
  constructor(n:string){//实例化类的时候触发的方法
    this.name = n;
  }
  run():void{
    alert(this.name + "在跑步。");
  }
}

const p1 = new Person("张泽悠");

console.log(p1.run()) */
// class Person{
//   name:string;//定义属性 前面省略了public关键词 公共属性
//   constructor(name:string){//实例化类的时候触发的方法
//     this.name = name;
//   }
//   getName():string{
//     return this.name;
//   }
//   setName(name:string):void{
//     this.name = name;
//   }
// }
// const p1 = new Person("张泽悠");
// p1.setName("张泽依");
// console.log(p1.getName());
////////////////////////////////////////////////////////////////////////////////////
/* ts中实现继承  extends 和 super关键字*/
// class Person{
//   name:string;
//   constructor(name:string) {
//     this.name = name;
//   }
//   run():string{
//     return `${this.name}在运动`;
//   }
// }
// var p = new Person("张泽悠");
// alert(p.run());
// class Web extends Person{
//   constructor(name:string) {
//     super(name);//super表示调用父类构造函数 这里name传给父类了
//     //初始化父类的构造函数
//   }
//   //子类定义自己的方法
//   work(){
//     alert(`${this.name}在工作`);
//   }
//   run():string{
//     return `${this.name}运动了.`;
//   }
// }
// var w = new Web("张泽依");
// alert(w.run());
//////////////////////////////////////////////////////////////////////////////////
/* ts类里面的修饰符
ts定义属性的时候给我们提供了3种修饰符
public : 公有 在类里面、子类、类外面都可以访问；
protected :保护  类里面、子类可以访问；类外部没法访问；
private: 私有 在类里面可以访问；子类和类外面都没法访问；
    属性如果不加修饰符 默认就是public
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.sex = "男"; //公有属性
        this.height = "181"; //公有属性
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person;
}());
var p = new Person("张泽悠");
// console.log(p.sex); 外部没法访问protected类型
// console.log(p.height);//外部也不能访问类中的private函数
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
        //初始化父类的构造函数
    }
    //子类定义自己的方法
    Web.prototype.work = function () {
        alert(this.name + "\u5728\u5DE5\u4F5C");
    };
    Web.prototype.run = function () {
        return this.name + "\u8FD0\u52A8\u4E86."; //这个name是父类的  因为web里面没有 子类调用父类的name
    };
    Web.prototype.getSex = function () {
        return this.name + " is " + this.sex + "\u4EBA"; //子类web能访问父类中protected的属性
    };
    return Web;
}(Person));
var w = new Web("张泽依");
w.work();
