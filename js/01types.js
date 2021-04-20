"use strict";
// typescript当中的类型
/*
  typescript里面的数据类型
  
  布尔类型 boolean
  数字类型 number
  字符串类型 string
  数组类型 array
  元组类型 tuple
  枚举类型 enum
  任意类型 any
  null和undefined  null undefine
  void类型
  never类型
 */
// 布尔类型(boolean) 
//typescript中增加了类型校验  为了让我们的代码更规范  后同
var flag = true;
console.log(flag);
// 数字类型(number)
var num = 456;
console.log(num);
// 字符串类型 (string)
var str = "zhangzeyi";
console.log(str);
//数组类型 (array)
// var arr:number[] = [11,22,33];
// console.log(arr);
// var arr:Array<number> = [11,22,33];
// console.log(arr);
var arr = [11, "sss", { obj: 1 }];
console.log(arr);
// 元组类型 tuple  就是有很多种类型的元素的数组 给数组中每个位置指定类型
let tup = [11, "zzy"];
console.log(tup);
// 枚举类型 enum
var meiju;
(function (meiju) {
    meiju[meiju["success"] = 1] = "success";
    meiju[meiju["error"] = 2] = "error";
})(meiju || (meiju = {}));
let mes = meiju.success;
console.log(mes); //打印出来是1
console.log(meiju[mes]); //打印出来是success
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 3] = "red";
    Color[Color["orange"] = 4] = "orange";
})(Color || (Color = {}));
let co = Color.blue;
console.log(co);
// 任意类型 any
let anyType = 444;
console.log(anyType);
// null和undefined类型  属于never类型的子类型
/* var n1:number;
console.log(n1) //输出undefined 报错 */
/* var n2:number | undefined;
console.log(n2);  //正确 */
var n3;
// n3 = 123 //报错
var n4; //可以是这3种类型
// void类型 表示没有任何类型 一般用来定义方法 且没有返回值
function run2() {
    console.log(1);
}
// never类型  
/* 是其他类型的子类(包括null和undefined)，代表从不会出现的值 */ //几乎是用不着的
// var a1:undefined;
// a = undefined;
// var b1 :null;
// b = null
var a;
a = (() => {
    throw new Error("错误");
})();
