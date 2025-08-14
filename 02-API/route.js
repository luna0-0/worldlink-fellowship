const express = require("express");
const router=express.Router();

router.get("/home", (req, res) => {
  res.send("This is home page");
});

router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const location=req.query.location;
  res.send(`This is example of dynamic route. Hello User ${userId},<br>location:${location}`);
});


router.get("/info/:id/education/:education/address/:address", (req, res) => {
  const id = req.params.id;
  const education = req.params.education;
  const address = req.params.address;
  res.send(
    `This is example of dynamic route. Hello ${id}<br/> education: ${education},<br/>address: ${address}`
  );
});

module.exports=router;