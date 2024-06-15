const express = require('express');
const app = express();
const env = require("dotenv").config();
const cors=require("cors");
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE)
const Data = require("./Schema");
app.use(cors({
  "origin":"*"
}));
const port=process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/daffodils', async function(req, res){
  var data = await Data.find();
res.json(data);
});
app.post('/daffodil',async function(req, res){
    var Userdata = req.body;
    console.log(Userdata);
    await Data.create(Userdata);
    res.json({"Message":"Created"});
    });
app.listen(port,()=>{
    console.log('listening on');
})