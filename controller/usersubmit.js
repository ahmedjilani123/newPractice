const UserSubmit =require("../UserSubmit");

const SubmitGet = async function(req, res){
    var data = await UserSubmit.find();
  res.status(201).json(data);
  }
const submitPost =async function(req, res){
    var Userdata = req.body;
    await UserSubmit.create(Userdata);
    res.status(201).json({"Message":"Submit"});
    }
  module.exports ={
    SubmitGet,
    submitPost
  }