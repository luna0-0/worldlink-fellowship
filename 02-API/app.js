const express = require("express");

// const profileRouter = require("./profile");
// const userRouter = require("./user");
// const routeRouter = require("./route");
const collegeRouter = require("./router/college");
const studentRouter = require("./router/student");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/college", collegeRouter);

app.use("/student", studentRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use("/profile", profileRouter);

// app.use("/user", userRouter);

// app.use("/routes", routeRouter);


app.listen(4000, () => {
  console.log("Server started at port 4000");
});
