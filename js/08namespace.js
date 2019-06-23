"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* 命名空间
  在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数，接口，类等放置到命名空间内
  和java的包，.net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要再外部访问的对象。

  命名空间和模块的区别
  命名空间:内部模块，主要用于组织代码，避免命名冲突。可以用export 把明明空间内部的类等  暴露出去
  模块:ts的外部模块的简称，侧重代码复用，一个模块可能里面有很多命名空间

  ///三斜线指令  之后的ts版本可能不再支持了
*/
//暴露之后再外部文件可以引用
var A;
(function (A) {
    class Dog {
        constructor(theName) {
            this.name = theName;
        }
        eat() {
            console.log(`${this.name}吃狗粮.`);
        }
    }
    A.Dog = Dog;
    class Cat {
        constructor(theName) {
            this.name = theName;
        }
        eat() {
            console.log(`${this.name}吃老鼠.`);
        }
    }
    A.Cat = Cat;
})(A || (A = {}));
//调用命名空间内A的
var dog = new A.Dog("大狗");
dog.eat();
//暴露之后再外部文件可以引用
var B;
(function (B) {
    class Dog {
        constructor(theName) {
            this.name = theName;
        }
        eat() {
            console.log(`${this.name}咬人.`);
        }
    }
    B.Dog = Dog;
})(B = exports.B || (exports.B = {}));
//调用命名空间B内的
var dog2 = new B.Dog("狗狗");
dog2.eat();
