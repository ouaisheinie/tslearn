"use strict";
/* 模块的概念(官方)
  关于术语的一点说明：请务必注意一点，TypeScript1.5术语名已经发生了变化。"内部模块"现在被称为"命名空间"。
  "外部模块"现在则称为"模块"。模块在其自身的作用域里执行，而不是全局作用域里。
  这意味着定义一个在模块里的变量、函数、类等等在模块外部是不可见的，除非你明确地使用export导出它们。
  相反，如果想使用其他模块导出的变量，函数，类，接口等的时候。你必须要导入他们，可以使用import。

  模块的概念(自己理解)
  我们可以把一些公共的功能单独抽离成一个文件作为一个模块。
  模块里面的变量，函数，类等默认是私有的。如果我们要在外部访问模块里这些私有的东西，我们需要用export暴露模块里的东西，然后我们通过impor引入模块就可以使用模块里的东西了。
*/
Object.defineProperty(exports, "__esModule", { value: true });
//as关键词用法
var db_1 = require("./module/db");
console.log(db_1.getData());
console.log(db_1.dburl);
