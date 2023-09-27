const express = require("express");
const visitorRouter = express.Router();
const { visitorModel } = require("../model/visitorModel");

visitorRouter.post("/count", async (req, res) => {
  console.log(req.socket.remoteAddress)
  try {
    let count = await visitorModel.countDocuments();
    let details = {
      id: count + 1,
      ipAddress: req.socket.remoteAddress || "can't access",
      os:req.body.os,
      browser:req.body.browser,
      date: req.body.date,
      time: req.body.time,
    };
    // if(details.ipAddress!='127.0.0.1')
    // {
      let visitor = new visitorModel(details);
      await visitor.save();
      res.send("added success");
    // }
    // else res.send("can't add")
  } catch (error) {
    console.log(error);
  }
});

visitorRouter.get("/count", async (req, res) => {
  try {
    let count = await visitorModel.countDocuments();
    res.send({ count });
  } catch (error) {
    console.log(error);
  }
});

visitorRouter.get("/all", async (req, res) => {
  try {
    let all = await visitorModel.find({});
    res.send(all);
  } catch (error) {
    console.log(error);
  }
});

visitorRouter.delete('/clearAll',async(req,res)=>{
  try {
    await visitorModel.deleteMany({})
    res.send('All Cleared')
  } catch (error) {
    console.log(error)
  }
})

module.exports = { visitorRouter };
