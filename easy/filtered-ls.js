const fs = require("fs");

const path = require("path");

const ext = `.${process.argv[3]}`;

fs.readdir(process.argv[2], (err, data) => {
  err ? console.error(err) : err;
  data.forEach((x) => (path.extname(x) === ext ? console.log(x) : x));
});
