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
  const updatevendorData =async function(req, res){
    var Userdata = req.body;
    await Data.updateOne({Supplier_ID:Userdata.Supplier_ID},{$set: Userdata })
    res.status(200).json({Message:"Updated"});
  }
  module.exports ={
    vendorsub,
    vendorpost,
    updatevendorData
  }