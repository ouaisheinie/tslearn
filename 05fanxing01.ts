/* 
泛型的定义
泛型函数
泛型类
泛型接口
*/
/* 泛型的定义 
  泛型，在软件工程中，我们不仅要创建一致的定义良好的api，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

  在像c#和java这样的语言中，可以使用泛型来创建可重用的组件。一个组件可以支持多种类型的数据。这样用户就可以用自己的数据类型来使用组件

  通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持。
*/
//只能返回string类型的数据
// function getData2(value:string):string{
//   return value;
// }
/* 同时可以返回string类型和number类型  （不用any类型）  用泛型
泛型可以支持不特定的数据类型，要求：传入参数和返回参数的数据类型一致
T表示泛型 具体什么类型是调用这个方法的时候决定的 */
// function getData2<T>(value:T):T{
//   return value;
// }
// getData2<number>(123);
// getData2<string>("123");
// getData2<number>("123"); 错误的写法  "123"为字符串
//////////////////////////////////////////////////////////////////////////////////////
/* 泛型类 */
//比如有个是最小堆算法，需要同时支持返回数字和字符串两种类型，通过类的泛型来实现。
//下面是一个普通类
/* class Minclass {
  public list:Array<number> = [];
  add(num:number){
    this.list.push(num);
  }
  min():number{
    var minnum = this.list[0];
    for(var i = 0;i<this.list.length;i++){
      if(this.list[i] < minnum){
        minnum = this.list[i];
      }
    }
    return minnum;
  }
}
var m = new Minclass();
m.add(2);
m.add(22);
m.add(23);
m.add(3);
m.add(13);
console.log(m.min()); */

//上面是一个普通类  现在写一个泛型类
/* class MinClass<T>{
  public list:T[] = [];
  add(value:T){
    this.list.push(value);
  }
  min():T{
    var minnum = this.list[0];
    for(var i = 0;i<this.list.length;i++){
      if(this.list[i] < minnum){
        minnum = this.list[i];
      }
    }
    return minnum;
  }
}
var  m1 = new MinClass<number>(); //表示实例化类 并且制定了类的T代表的类型是number
m1.add(12);
m1.add(4);
m1.add(2);
m1.add(6);
m1.add(1);
m1.add(35);
console.log(m1.min());
var m2 = new MinClass<string>();
m2.add("a");
m2.add("c");
m2.add("v");
m2.add("t");
m2.add("z");
console.log(m2.min()); */