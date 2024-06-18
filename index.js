const express = require('express');
const app = express();
const env = require("dotenv").config();
const cors=require("cors");
const mongoose = require('mongoose');
const { vendorsub, vendorpost } = require('./controller/vendorsub');
const { SubmitGet, submitPost } = require('./controller/usersubmit');
const { UserStatus } = require('./controller/UserStatus');
mongoose.connect(process.env.DATABASE)
app.use(cors({
  "origin":"*"
}));
const port=process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/vendorsub', vendorsub);
app.post('/vendorsub',vendorpost);

app.get('/UserSubmit',SubmitGet);
app.post('/UserSubmit',submitPost);
app.post("/userven",UserStatus)
app.listen(port,()=>{
    console.log('listening on');
})