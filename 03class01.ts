/* 
//es5 简单的类
  function Person(){
    this.name = "张泽悠";
    this.age = 20;
  }
  var p = new Person();
  console.log(p.name); */

/* 
//es5 中 原型链上定义类
//原型链上的属性会被多个实例共享   但是构造函数不会
function Person(){
  this.name = "张泽悠";
  this.age = 20;
}
Person.prototype.sex = "男";
Person.prototype.run = function(){
  alert(this.name + "在运动");
}

var p = new Person();
console.log(p.sex); */

/* 类里面的静态方法
直接 上面的Person.getInfo = () => {} 就是一个静态方法
 */

/* 
es5中的继承
继承Person类 用得最多的就是原型链加上对象冒充的组合继承方式
//对象冒充可以继承构造函数里的属性和方法  注意 是构造函数里的 就像上面的Person  不能继承原型prototype和原型链上的属性和方法
function Person(){
    this.name = "张泽悠";
    this.age = 27;
  }
  Person.prototype.sex = "男";
  Person.prototype.run = function(){
    alert(this.name + "在跑步");
  }

  function Web(){  //对象冒充实现继承
    Person.call(this);
  }
  Web.prototype = new Person();//原型链实现继承  既可以继承构造函数里的属性和方法  又可以继承原型链上的属性和方法。
  //但是  原型链继承的  实例化子类的时候没办法给父类传参

  const w = new Web();
  w.run();
 */

/* 原型链加构造函数  组合继承模式 



*/