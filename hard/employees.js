const fs = require("fs");

const obj = {
  employees: [],
};

names = [
  "John",
  "James",
  "Erica",
  "Dianne",
  "Daniel",
  "Kayla",
  "Richard",
  "Taylor",
  "Tyler",
  "Jill",
];

for (let i = 0; i < 10; i++) {
  obj.employees.push({
    name: names[i],
    ID: `000${i}`,
    salary: Math.round((Math.random() * 200000 + 50000) / 1000) * 1000,
  });
}

const json = JSON.stringify(obj);

fs.writeFileSync("employees.json", json, "utf-8");
