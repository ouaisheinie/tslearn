export var dburl = "xxxxxx";
export function getData():any[]{
  console.log("获取数据库的数据");
  return [
    {
      title:"啊哈哈"
    },
    {
      title:"123"
    }
  ]
}

//export default 在一个模块里面只能用一次   export可以用多次