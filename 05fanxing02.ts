/* 泛型接口 */
//下面写一个方法类型接口  也可以叫函数类型接口
/* interface ConfigFn{
  //写一个函数 或者方法的约定
  (value1:string,value2:string):string;
}
var setData:ConfigFn = function(value1:string,value2:string):string{
  return value1 + value2;
}
console.log(setData("黄淇","在玩")); */
//////////////////////////////////////////////////////////////////////////////////////
/* 下面定义一个函数类型的泛型接口 要求接口的类型不是指定的 是动态传入的*/
/* interface ConfigFn<T>{
  (value:T):T;
}
function getData1<T>(value:T):T{
  return value;
}
var myGetData:ConfigFn<string> = getData1;

console.log(myGetData("哈哈")); */