//这是一个异步函数 promise的
function doubleAfter2seconds(num:number){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(2 * num);
    }, 2000);
  })
}

async function testResult(){
  let result = await doubleAfter2seconds(30);
  console.log(result);
}
console.log(doubleAfter2seconds(30));
testResult();