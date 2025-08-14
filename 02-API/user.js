const express = require("express");
const router = express.Router();

const app = express();

// app.get("/:id", (req, res) => {
//   const userId = req.params.id;
//   const location = req.query.location;
//   res.send(
//     `This is example of dynamic route. Hello User ${userId},<br>location:${location}`
//   );
// });

router.get("/try-catch", (req, res) => {
  try {
    // debugger;
    const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.log("Error reading file",error);
    res.status(500).send("error reading file");
  }
});

module.exports = app;
