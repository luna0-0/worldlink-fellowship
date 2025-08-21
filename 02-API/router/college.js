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
  connection.query("SELECT * FROM colleges", (err, results) => {
    if (err) {
      console.log("Error querying colleges", err);
    } else {
      console.log("Colleges Data", results);
      res.send(results);
    }
  });
});

router.get("/detail/:id", (req, res) => {
  const collegeId = req.params.id;
  connection.query(
    `SELECT * FROM colleges WHERE id=${collegeId}`,
    (err, results) => {
      if (err) {
        console.log("Error querying colleges", err);
      }
      console.log("College data: ", results);
      res.send(results);
    }
  );
});

router.get("/search/:name", async (req, res) => {
  const collegeName = req.params.name;
  const results = await new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM colleges WHERE name="${collegeName}"`,
      (err, results) => {
        if (err) reject(err);
        //   console.log("Error querying college", err);

        resolve(results);
        console.log("College data is: ", results);
      }
    );
  });
  console.log("College data is: ", results);
  res.send(results);
});

router.post("/create", async (req, res) => {
  const collegeName = req.body.name;
  const collegeAddress = req.body.address;

  if (!collegeName && !collegeAddress) {
    return res.status(400).send({ data: "Name and address are required" });
  }

  const result = await new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO colleges(name,address) VALUES('${collegeName}','${collegeAddress}')`,
      (err, data) => {
        if (err) {
          console.log("Error creating college", err);
          reject("Something went wrong", err.message);
        } else {
          console.log("College created successfully", data);
          resolve(`${data.affectRows} row(s) created with id ${data.insertId}`);
        }
      }
    );
  });
  res.send({ message: result, data: req.body });
});

router.put("/update/:id", async (req, res) => {
  const collegeId = req.params.id;
  const collegeName = req.body.name;
  const collegeAddress = req.body.address;

  if (!collegeName || !collegeAddress) {
    return res.status(400).send({ data: "Name or address is required" });
  }

  const result = await new Promise((resolve, reject) => {
    connection.query(
      `UPDATE colleges SET name='${collegeName}', address='${collegeAddress}' WHERE id=${collegeId}`,
      (err, data) => {
        if (err) {
          console.log("Error creating college", err);
          reject("Something went wrong", err.message);
        } else {
          console.log("College created successfully", data);
          resolve(`${data.affectRows} row(s) created with id ${data.insertId}`);
        }
      }
    );
  });
  res.send({ message: result, data: req.body });
});

router.delete("/delete/:id", async (req, res) => {
  const collegeId = req.params.id;

  if (!collegeId) {
    return res.status(400).send({ data: "Colege id is required" });
  }

  const result = await new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM colleges where id=${collegeId}`,
      (err, data) => {
        if (err) {
          console.log("Error creating college", err);
          reject("Something went wrong", err.message);
        } else {
          console.log("College created successfully", data);
          resolve(`${data.affectRows} row(s) deleted with id ${collegeId}`);
        }
      }
    );
  });
  res.send({ message: result, data: req.body });
});

module.exports = router;
