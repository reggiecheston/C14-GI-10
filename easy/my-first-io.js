const fs = require("fs");

let buffObject = fs.readFileSync(process.argv[2]);

let buffStr = buffObject.toString();

// let count = buffStr
//   .split("\n")
//   .reduce((acc, cur) => (cur === "\n" ? acc++ : acc), -1);
let count = buffStr.split("\n").length - 1;

console.log(count);
