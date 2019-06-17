"use strict";
/* 函数的定义 */
//函数在传递参数的时候 要给他指定类型
//1 函数声明法
function run() {
    return "run";
}
//2 匿名函数
var fun2 = function () {
    return 123;
};
console.log(fun2());
//3 定义方法传参  参数也有类型
// function getInfo(name:string,age:number):string{
//   return `${name} --- ${age}`
// }
// console.log(getInfo("张泽悠",20));
// var getInfo2 = function(name:string,age:number){
//   return `${name} --- ${age}`;
// }
// console.log(getInfo2("张三",40));
// var con3 = function():void{
//   console.log(2);
// }
/* 可选参数 */
//在可选参数后面加个问号 入下面的代码
//es5中方法的实参和形参可以不一样，但是TS中必须一样，如果不一样就需要配置可选参数
//注意  可选参数必须配置到参数的最后面
// function getInfo(name:string,age?:number = 20):string{
//   if(age){
//     return `${name} --- ${age}`;
//   }else{
//     return `${name}---年龄未知`
//   }
// }
// alert(getInfo("张泽悠",20));
/* 默认参数 */
//默认参数放在前边后边都可以
//es5中没法设置默认参数  es6和ts中可以设置默认参数
// function getInfo2(name:string,age:number = 20):string{
//   if(age){
//     return `${name} --- ${age}`;
//   }else{
//     return `${name}---年龄未知`
//   }
// }
// alert(getInfo2("张泽悠"));
/* 剩余参数 */
// function sum(a:number,b:number,c:number,d:number):number{
//   return a + b + c + d;
// }
// alert(sum(1,2,3,4));
//三点运算符接收形参
// function sum(...result:number[]):number{
//   var sum = 0;
//   for(var i= 0;i<result.length;i++){
//     sum += result[i];
//   }
//   return sum;
// }
// alert(sum(1,2,3,4,5,6));
/* 函数的重载 */
//typescript中的函数重载 通过为同一个函数提供多个函数类型定义来实现多种功能的定义
//ts为了兼容es5 和 es6 的重载的写法 和 java中有区别
//TS中的重载
// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any{
//   if(typeof str === "string"){
//     return "我叫" + str;
//   }else{
//     return "我的年龄是" + str;
//   }
// }
// console.log(getInfo(20));
// function getInfo(name:string):string;
// function getInfo(name:string,age:number):string;
// function getInfo(name:any,age?:any):any{//这个是来描述name和age的  然后age可选
//   if(age){
//     return `我叫:${name},年龄是${age}`;
//   }else{
//     return `我叫:${name}`;
//   }
// }
// console.log(getInfo("张泽悠",27));
/* 箭头函数 */
//箭头函数里面的this指向上下文
setTimeout(function () {
    alert("run");
}, 1000);
