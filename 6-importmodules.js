console.log(__dirname)
setInterval(()=>{
    console.log("Hello World")
},1000);
const name=require('./3-const');
const sayHi=require('./2-function');
const data=require('./4-alternativeflavour');
require('./5-sum');
console.log(name)
sayHi("Dipesh");
sayHi(name.john);
sayHi(name.harry);

console.log(data);
console.log (typeof data);
console.log(data.items);
console.log (data.dummyperson.name)