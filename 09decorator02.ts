/* 方法装饰器
  它会被应用到方法的属性描述符上 可以用来监视 修改 或者替换方法定义
  方法装饰器会在运行时传入下列3个参数
  1.对静态成员来说是类的构造函数，对实例成员来说是类的原型对象。
  2.成员的名字
  3.成员的属性描述符
 */

//方法装饰器
//扩展当前类HttpClient的实例和方法。
/* function get(params:any){
  return function(target:any,name:any,desc:any){//target这个例子代表了HttpClient类
    //扩展当前类HttpClient的实例和方法。
    target.apiUrl = "xxx";
    target.run = function(val:string){
      console.log('run')
    }
  }
}
class HttpClient{
  public url:any | undefined;
  constructor(){

  }
  @get("http://www.itying.com")
  getData(){ //这个getData是实例方法 所以拿到的是HttpClient的原型对象
    console.log(this.url);
  }
}
var http:any = new HttpClient();
console.log(http.apiUrl);
http.run(); */
///////////////////////////////////////////////////////////////////////////////

//修改被修饰的方法
/* function get(params:any){
  return function(target:any,name:any,desc:any){//target这个例子代表了HttpClient类
    //修改getData()方法  就要修改desc下面的value 这个value就是被修饰的方法
    // console.log(desc.value);
    //把getData传入的参数改为string类型

    //1.保存当前的方法
    var oMethod = desc.value;
    //2.修改
    desc.value = function(...args:any[]){
      args = args.map(item => {
        return item.toString();
      });
      console.log(args);
      //如果只是修改  不替换  就用下面的方法 在里面调用oMethod 并且把参数args传入
      oMethod.apply(this,args);
    };
  }
}
class HttpClient{
  public url:any | undefined;
  constructor(){

  }
  @get("http://www.itying.com")
  getData(...args:any[]){ //这个getData是实例方法 所以拿到的是HttpClient的原型对象
    console.log(args);
    console.log("我是getData里面的方法");
  }
}

var http:any = new HttpClient();
http.getData(123,"xxx"); */

///////////////////////////////////////////////////////////////////////////////////////////////////////
/* 方法参数装饰器 
  方法参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据。传入下列3个参数
  1.对静态成员来说是类的构造函数，对于实例成员来说是类的原型对象。
  2.参数的名字
  3.参数在函数参数列表中的索引
*/
//不讲了 艹