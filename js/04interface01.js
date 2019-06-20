"use strict";
/* 接口 */
/*
属性接口
函数类接口
可索引接口
类类型接口
接口扩展
*/
//接口的作用 在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范。在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据。也不关心这些类里方法的实现细节。它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要，typeScript中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
/* 属性接口 */
//就是对json的约束 行为和动作的规范  对批量方法进行约束
// 行为和动作的规范
// interface FullName{
//   //如果obj:FullName  表示传入的参数obj 必须包含firstName 和 secondName
//   firstName:string;
//   secondName:string;
// }
// function printName(obj:FullName){
//   //必须传入一个对象  有firstName  和  secondName
//   console.log(obj.firstName + " " + obj.secondName);
// }
// const obj = {
//   firstName:"泽依",
//   secondName:"张"
// };
// printName(obj);
//对批量方法进行约束
// interface FullName{
//   age:number;
//   firstName:string;
//   secondName:string;
// }
// function printInfo(info:FullName){
//   //必须传入一个对象  有firstName  和  secondName
//   console.log(info.firstName + " " + info.secondName + " " + info.age);
// }
// const info = {
//   age:27,
//   firstName:"泽依",
//   secondName:"张"
// };
// printInfo(info);
// 接口:可选属性
// interface FullName{
//   firstName:string;
//   secondName?:string;//让secondName  可传  可不传
// }
// function getName(name:FullName){
//   console.log(name);
// }
// //接口内 参数的顺序可以不一样  但是必须要有; secondName可传可不传了
// getName({
//   firstName:"nm",
// });
