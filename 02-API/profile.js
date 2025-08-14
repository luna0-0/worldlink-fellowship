const express=require("express");
const router=express.Router();

router.get("/", (req, res) => {
    const location = req.query.location;
    const name = req.query.name;
    const country = req.query.country;
    res.send(
        `This is static route;<br/>From<br/>Location:${location},<br/>Name:${name},<br/>Country:${country}`
    );
});

module.exports=router;