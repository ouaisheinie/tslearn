"use strict";
/* 静态属性 静态方法 static*/
/*
//es5中
function Person(){
  this.run1 = function(){}//实例方法
}
Person.run2 = function(){} //静态方法
Person.haha = "123"//静态属性
//调用run1 只能先实例化  调用run2 就直接Person.run
*/
// class Persons{
//   public name:string;
//   static sex:string = "男";
//   constructor(name:string){
//     this.name = name;
//   }
//   run(){//实例方法
//     alert(`${this.name}在跑步`);
//   }
//   work(){//实例方法  实例化以后才能调用的
//     alert(`${this.name}在工作`);
//   }
//   static dance(){
//     console.log("静态方法.");//静态方法没法直接调用类里面的属性  但可以调用静态属性
//     console.log(this.sex);//可以获取静态属性  但不能直接调用this.name
//   }
// }
// const p1 = new Persons("张泽悠");
// Persons.dance();//静态方法直接这样调用
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
/* 多态   多态属于继承*/
//多态 父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现   多态也是继承的一种表现 
// class Animal {
//   name:string;
//   constructor(name:string){
//     this.name = name;
//   }
//   eat(){//动物具体吃什么不知道 吃的方法让继承它的子类去实现 每一个子类的表现不一样
//     console.log("吃的方法");
//   }
// }
// class Dog extends Animal{
//   constructor(name:string){
//     super(name)
//   }
//   eat(){
//     return this.name + "吃狗粮";
//   }
// }
// class Cat extends Animal{
//   constructor(name:string){
//     super(name);
//   }
//   eat(){
//     return this.name + "吃老鼠";
//   }
// }
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
/* 抽象方法  抽象类   也是一种多态*/
//typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法 抽象类中的抽象方法不包括具体实现并且必须在派生类中实现。
//抽象类和抽象方法用来定义标准
//抽象类  要求他的子类必须包含什么方法  
//抽象方法 只能出现在抽象类里面
class Animal {
    constructor(name) {
        this.name = name;
    }
}
//抽象类的子类必须实现抽象类里面的抽象方法
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(this.name + "吃肉。");
    }
}
const d = new Dog("小黑");
d.eat();
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(this.name + "吃老鼠。");
    }
    run() {
        console.log(this.name + "在跑步");
    }
}
const c = new Cat("小花");
c.eat();
c.run();
