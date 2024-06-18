const Data = require("../Schema");
const UserStatus=async (req, res)=>{
    var UserData = req.body;
    var FindObject = await Data.find(UserData.Supplier_ID);
    if(UserData.Status =="Approved"){
     FindObject.Status = "Approved";
    }else if(UserData.Status =="Reject"){
          FindObject.Status="Reject"
    }else if(UserData.Status=="Re-Directed"){
        FindObject.Status="Re-Directed"
    }
}
module.exports ={
    UserStatus,
}