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

console.log("End");
