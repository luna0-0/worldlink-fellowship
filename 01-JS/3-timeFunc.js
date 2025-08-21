console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

setImmediate(()=>{
    console.log("Hello from setImmediate");
})

process.nextTick(()=>{
    console.log("process.nextTick");
})

await new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello from await");
    // resolve();
    reject("rejected by force");
  }, 5000);
});

let a=0;
const interval=setInterval(()=>{
  if(a<=10){
    console.log("In setinterval");
    a++;
  }
  else{
    clearInterval(interval);
    console.log("Interval cleared");
  }
},1000);

console.log("End");