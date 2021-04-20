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
var flag:boolean = true;
console.log(flag);

// 数字类型(number)
var num:number = 456;
console.log(num);

// 字符串类型 (string)
var str:string = "zhangzeyi";
console.log(str);

//数组类型 (array)
// var arr:number[] = [11,22,33];
// console.log(arr);
// 泛型数组
// var arr:Array<number> = [11,22,33];
// console.log(arr);

var arr:any[] = [11,"sss",{obj:1}];
console.log(arr);

// 元组类型 tuple  就是有很多种类型的元素的数组 给数组中每个位置指定类型
let tup:[number,string] = [11,"zzy"];
console.log(tup);

// 枚举类型 enum
enum meiju {
  success = 1,
  error = 2,
}
let mes:meiju = meiju.success;
console.log(mes); //打印出来是1
console.log(meiju[mes]); //打印出来是success

enum Color {  //如果标识符没有赋值  那么值就是下标
  blue,
  red = 3,
  orange
}
let co:Color = Color.blue;
console.log(co);

// 任意类型 any
let anyType:any = 444;
console.log(anyType);

// null和undefined类型  属于never类型的子类型
/* var n1:number;
console.log(n1) //输出undefined 报错 */


/* var n2:number | undefined;
console.log(n2);  //正确 */

var n3:null;
// n3 = 123 //报错
// 联合类型
var n4:null | number | undefined; //可以是这3种类型


// void类型 表示没有任何类型 一般用来定义方法 且没有返回值
function run2():void{  //表示方法没有任何类型的返回值
  console.log(1);
}

// never类型  
/* 是其他类型的子类(包括null和undefined)，代表从不会出现的值 */ //几乎是用不着的
// var a1:undefined;
// a = undefined;

// var b1 :null;
// b = null

var a : never;  // 一般是错误的情况可以用never
a = (()=>{
  throw new Error("错误");
})()