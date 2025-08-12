const path=require("path");

const currentPath=path.join(__dirname);
console.log("cirrentPath",currentPath);

const fs=require("fs");

console.info(`Reading file from ${currentPath}`);
const data=fs.readFileSync(path.join(currentPath, "./1.js"),"utf-8");

fs.writeFileSync(path.join(currentPath,"./op.txt"),"update from code");

console.log("data");


const os=require("os");
console.log(os.platform());
console.log(os.freemem());
console.log(os.userInfo());
