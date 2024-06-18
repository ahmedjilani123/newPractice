const Data = require("../Schema");
const UserStatus=async (req, res)=>{
    var UserData = req.body;
    let StatusData;
    if(UserData.Status == "A"){
        StatusData="Approved";
    }else if(UserData.Status == "X"){
        StatusData="Rejected"
    }else if(UserData.Status== "RR"){
        StatusData="Re-Routed"
    }
    await Data.updateOne({Supplier_ID:UserData.Supplier_ID},{$set: {Status:StatusData} })
    res.status(200).json({Message:"Updated"});
}
module.exports ={
    UserStatus,
}