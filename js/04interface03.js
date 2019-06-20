"use strict";
/* 函数类型接口 */
//作用：对方法传入的参数以及返回值进行约束
//加密的函数类型接口
// interface encrypt {
//   (key:string,value:string):string
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programer4 = /** @class */ (function () {
    function Programer4(name) {
        this.name = name;
    }
    Programer4.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programer4;
}());
var Web4 = /** @class */ (function (_super) {
    __extends(Web4, _super);
    function Web4(name) {
        return _super.call(this, name) || this;
    }
    Web4.prototype.eat = function () {
        console.log(this.name + "喜欢吃馒头");
    };
    Web4.prototype.work = function () {
        console.log(this.name + "工作是写代码");
    };
    return Web4;
}(Programer4));
var w4 = new Web4("黄淇");
w4.eat();
w4.work();
w4.coding("在撸");
