const express = require("express");

const app = express();

app.get("/html", (req, res) => {
  console.log("Hello World");
  // res.send("Hello from express");
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My first HTML</title>
    </head>
    <body>
      <h1 style="color:red;">Hello from html</h1>
    </body>
    </html>`
  );
});
app.listen(3000, () => {
  console.log("Server Strated at port 3000");
});
