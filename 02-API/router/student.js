const express = require("express");
const router = express.Router();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anul@123",
  database: "luna_schema",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log("Error connection to MySQL", err);
  } else {
    console.log("Connected to MySQL");
  }
});

router.get("/", (req, res) => {
  connection.query("SELECT * FROM students", (err, results) => {
    if (err) {
      console.log("Error querying students", err);
    } else {
      console.log("Students Data", results);
      res.send(results);
    }
  });
});

router.get("/detail/:id", (req, res) => {
  const studentId = req.params.id;
  connection.query(
    `SELECT * FROM students WHERE id=${studentId}`,
    (err, results) => {
      if (err) {
        console.log("Error querying colleges", err);
      }
      console.log("College data: ", results);
      res.send(results);
    }
  );
});

router.post("/create", async (req, res) => {
  const studentName = req.body.name;
  const studentEmail = req.body.email;
  const studentPhone = req.body.phone;
  const studentAddress = req.body.address;

  if (!studentName && !studentAddress && !studentEmail && !studentPhone) {
    return res.status(400).send({ data: "All fields are required" });
  }

  const result = await new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO students(name,email,phone,address) VALUES('${studentName}','${studentEmail}','${studentPhone}','${studentAddress}')`,
      (err, data) => {
        if (err) {
          console.log("Error creating student", err);
          reject("Something went wrong", err.message);
        } else {
          console.log("Student created successfully", data);
          resolve(`${data.affectRows} row(s) created with id ${data.insertId}`);
        }
      }
    );
  });
  res.send({ message: result, data: req.body });
});

router.put("/update/:id", async (req, res) => {
  const studentId = req.params.id;
  const studentName = req.body.name;
  const studentEmail = req.body.email;
  const studentPhone = req.body.phone;
  const studentAddress = req.body.address;
  if (!studentName || !studentAddress || !studentEmail || !studentPhone) {
    return res.status(400).send({ data: "All fields are required" });
  } else {
    const result = await new Promise((resolve, reject) => {
      connection.query(
        `UPDATE students SET name='${studentName}', email='${studentEmail}', phone='${studentPhone}', address='${studentAddress}' WHERE id=${studentId}`,
        (err, data) => {
          if (err) {
            console.log("Error updating student", err);
            reject("Something went wrong", err.message);
          } else {
            console.log("Student updated successfully", data);
            resolve(`${data.affectedRows} row(s) updated`);
          }
        }
      );
    });
    res.send({ message: result });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const studentId = req.params.id;
  if (!studentId) {
    return res.status(400).send({ data: "Student ID is required" });
  }
  const result = await new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM students WHERE id=${studentId}`,
      (err, data) => {
        if (err) {
          console.log("Error deleting student", err);
          reject("Something went wrong", err.message);
        } else {
          console.log("Student deleted successfully", data);
          resolve(`${data.affectedRows} row(s) deleted`);
        }
      }
    );
  });
  res.send({ message: result });
});

module.exports = router;
