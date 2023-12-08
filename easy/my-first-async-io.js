const fs = require("fs");

fs.readFile(process.argv[2], (err, data) => {
  let buffStr = data.toString();
  let count = buffStr.split("\n").length - 1;

  console.log(count);
});
