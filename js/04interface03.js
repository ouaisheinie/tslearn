"use strict";
/* 函数类型接口 */
//作用：对方法传入的参数以及返回值进行约束
//加密的函数类型接口
// interface encrypt {
//   (key:string,value:string):string
// }
class Programer4 {
    constructor(name) {
        this.name = name;
    }
    coding(code) {
        console.log(this.name + code);
    }
}
class Web4 extends Programer4 {
    constructor(name) {
        super(name);
    }
    eat() {
        console.log(this.name + "喜欢吃馒头");
    }
    work() {
        console.log(this.name + "工作是写代码");
    }
}
var w4 = new Web4("黄淇");
w4.eat();
w4.work();
w4.coding("在撸");
