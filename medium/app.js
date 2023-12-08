const fs = require("fs");

fs.writeFileSync(
  "planets.txt",
  "mercury, venus, earth, mars, jupiter, saturn ,uranus, neptune, pluto (I still believe in you pluto)"
);

const bufferData = fs.readFileSync("planets.txt");

const data = bufferData.toString();

console.log(data);
