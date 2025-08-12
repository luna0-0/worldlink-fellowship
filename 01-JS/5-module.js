const path = require("path");

const currentPath = path.join(__dirname);
console.log("Current Path is: ", currentPath);
// console.log(__dirname);

const fs = require("fs");

console.info(`Reading file from ${path.join(currentPath, "./1.js")}`);
const data = fs.readFileSync(path.join(currentPath, "./1.js"), "utf-8");
console.log(data);

fs.writeFileSync(path.join(currentPath, "./op.txt"), "update from code");

const os = require("os");
console.log(os.type());
console.log(os.arch());
console.log(os.platform());
console.log(os.freemem());
console.log(os.userInfo());
