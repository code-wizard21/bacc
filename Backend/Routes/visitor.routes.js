const express = require("express");
const visitorRouter = express.Router();
const os=require('os')
const { visitorModel } = require("../model/visitorModel");

visitorRouter.post("/count", async (req, res) => {
  try {
    let date=new Date()
    let details = {
      ipAddress: req.ip,
      hostname:os.hostname(),
      architechture: os.machine(),
      CPUs: os.cpus(),
      cores: os.cpus().length,
      OSversion: os.version(),
      totalmemory: os.totalmem(),
      freememory: os.freemem(),
      date:date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
      time:date.getHours()+":"+date.getMinutes(),
    };
   
    let visitor=new visitorModel(details)
    await visitor.save()
    res.send("added success");
  } catch (error) {
    console.log(error);
  }
});

visitorRouter.get("/count", async (req, res) => {
  try {
    let count = await visitorModel.countDocuments();
    res.send({count});
  } catch (error) {
    console.log(error);
  }
});

visitorRouter.get('/all',async(req,res)=>{
    try {
        let all=await visitorModel.find({})
        res.send(all)
    } catch (error) {
        console.log(error)
    }
})

module.exports = { visitorRouter };
