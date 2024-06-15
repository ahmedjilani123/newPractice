const express = require('express');
const app = express();
const env = require("dotenv").config();
const cors=require("cors");
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE)
const Data = require("./Schema");
const UserSubmit =require("./UserSubmit");
app.use(cors({
  "origin":"*"
}));
const port=process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/vendorsub', async function(req, res){
  var data = await Data.find();
res.json(data);
});
app.post('/vendorsub',async function(req, res){
    var Userdata = req.body;
    Userdata.Status="Vendor Submitted";
    await Data.create(Userdata);
    res.json({"Message":"Created"});
    });
  app.get('/UserSubmit', async function(req, res){
      var data = await UserSubmit.find();
    res.status(201).json(data);
    });
    app.post('/UserSubmit',async function(req, res){
        var Userdata = req.body;
        Userdata.SupplierID =Math.floor((Math.random()*1000000)+1);
         await UserSubmit.deleteMany();
        await UserSubmit.create(Userdata);
        res.status(201).json({"Message":"Submit"});
        });
app.listen(port,()=>{
    console.log('listening on');
})