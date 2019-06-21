"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dburl = "xxxxxx";
function getData() {
    console.log("获取数据库的数据");
    return [
        {
            title: "啊哈哈"
        },
        {
            title: "123"
        }
    ];
}
exports.getData = getData;
//export default 在一个模块里面只能用一次   export可以用多次
