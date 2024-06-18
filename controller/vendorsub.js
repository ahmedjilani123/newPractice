const Data = require("../Schema");
const vendorsub =async function(req, res){
    var data = await Data.find();
  res.json(data);
  }
  const vendorpost =async function(req, res){
    var Userdata = req.body;
    await Data.create(Userdata);
    res.json({"Message":"Created"});
    }
  module.exports ={
    vendorsub,
    vendorpost
  }