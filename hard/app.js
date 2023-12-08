const express = require("express");
const fs = require("fs");
const path = require("path");

// const employees = require("./employees.json");

// import fs, { read } from "fs";
// import express from "express";
// import axios from "axios";
// import * as dotenv from "dotenv";
// import employees from "./employees.json";

// dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

const employeesFilePath = path.join(__dirname, "employees.json");

const readEmployeesData = () => {
  const rawData = fs.readFileSync(employeesFilePath);
  return JSON.parse(rawData);
};

app.get("/employees", (req, res) => {
  const employeesData = readEmployeesData();
  res.json(employeesData);
});

app.get("/employees/:employeeID", async (req, res) => {
  const employeeID = req.params.employeeID;
  const employeesData = readEmployeesData();
  const employee = employeesData.employees.find((x) => x.ID === employeeID);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`listening on port ${port}...`);
});
