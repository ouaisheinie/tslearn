/* 装饰器
  装饰器:装饰器是一种特殊类型的声明，他能够被附加到类声明，方法，属性或者参数上。可以修改类的行为。
  通俗的讲：装饰器就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能
  常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器。
  装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）.
  装饰器是过去几年js最大的成就之一，已是es7的标准特性之一。
*/

/* 类装饰器 */
//1.类装饰器在类声明之前被声明（紧靠类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数,代表当前类.
//装饰器可以在不修改类的前提下来扩展类的功能
//普通装饰器
/* function logClass(params:any){
  //params就是当前类

  //给params扩展属性
  params.prototype.apiUrl = "xxx";
  params.prototype.run = function(){
    console.log("我是一个run方法");
  }
}

@logClass  //普通装饰器
class HttpClient{
  constructor(){

  }
  getData(){

  }
}

var http = new HttpClient();
http.run(); */



//装饰器工厂  可以传参的
/* function logClass(params:string){
  return function(target:any){
    console.log(target);//代表目标类HttpClient
    console.log(params);//代表装饰器工厂传的参数 "hello"
    target.prototype.apiUrl = params;
  }
}

@logClass("http://www.itying.com/api")
class HttpClient{
  constructor(){

  }
  getData(){

  }
}
var http = new HttpClient();
console.log(http.apiUrl); */
////////////////////////////////////////////////////////////////////////////////////////////
/* 修改当前类的构造函数
一个类装饰器重载构造函数的例子
类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数类替换类的声明 */
/* function logClass(target:any){
  console.log(target);
  return class extends target{ //target就是下面的httpClient这个类
    apiUrl:any = "我是修改后的数据";
    getData(){
      this.apiUrl = this.apiUrl + "---";
      console.log(this.apiUrl);
    }
  } 
}

@logClass
class httpClient{
  public apiUrl:string | undefined;
  constructor(){
    this.apiUrl = "我是构造函数里面的apiUrl";
  }
  getData(){
    console.log(this.apiUrl);
  }
}

var http = new httpClient();
http.getData(); */

////////////////////////////////////////////////////////////////////////////////////////////////////
/* 属性装饰器 */
//属性装饰器表达式会在运行时当做函数被调用 传入下列2个参数
//1.对静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//2.成员的名字。

//类装饰器
function logClass(params:any){
  return function(target:any){
    // console.log(target);//类
    // console.log(params);//参数
  }
}
//属性装饰器
function logProperty(params:any){
  console.log(params);
  return function(target:any,attr:any){
    //target对静态成员来说是类的构造函数，对于实例成员是类的原型对象
    console.log(target);
    console.log(attr);
    target[attr] = "hahaha";//修改了下面的url  
  }
}

@logClass("xxxx")
class httpClient{
  @logProperty("http://ityinglcn")//装饰下面那个属性url
  public url:string | undefined;
  constructor(){

  }
  getData(){
    console.log(this.url);
  }
}

var http = new httpClient();
http.getData();