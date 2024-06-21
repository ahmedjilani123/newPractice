const Data = require("../Schema");
const UserStatus = async (req, res) => {
    var UserData = req.body;
    console.log(UserData);
    var getOneData = await Data.findOne({ Supplier_ID: UserData.Supplier_ID });
    var AllStatusM = getOneData.AllStatus;

    var StatusData;
    var ArrModule = [{ name: "Payment", fullName: "Finance" }, { name: "General", fullName: "General Department" }, { name: "Technical", fullName: "Legal" }];
    var StatusGet = [{ short: "A", fName: "Approved" }, { short: "X", fName: "Rejected" }, { short: "RR", fName: "Re-Routed" }];
    ArrModule.forEach((User) => {
        if (UserData.NameM == User.name) {
            StatusGet.forEach((ts) => {
                if (UserData.Status == ts.short) {
                    StatusData = User.fullName + " " + ts.fName;
                }
            })
        }
    })
    try{
        var count = 0;
        var indexget = undefined;
        getOneData.Status = StatusData;
        if(AllStatusM.length === 0){
            getOneData.AllStatus.push({ remark: UserData.remark, mainStatus: StatusData });
            await Data.updateOne({ Supplier_ID: UserData.Supplier_ID }, { $set: getOneData });
            res.status(200).json({ Message: "Updated" } );
        }else{
            var moduleNames = UserData.NameM == "Payment" ? "Finance" : UserData.NameM;
            AllStatusM.forEach((element, i) => {
                if (element.mainStatus.includes(moduleNames)) {
                    count++;
                    if (element.mainStatus.includes("Initialize")) {
                        indexget = i;
                    }
                }
            });
    
        }
        if (indexget >= 0) {
            getOneData.AllStatus.splice(indexget,1);
            getOneData.AllStatus.push({ remark: UserData.remark, mainStatus: StatusData }); 
            await Data.updateOne({ Supplier_ID: UserData.Supplier_ID }, { $set: getOneData });
            res.status(200).json({ Message: "Updated" } ); 
            return;
        }
        if (count == 0) {
            getOneData.AllStatus.push({ remark: UserData.remark, mainStatus: StatusData });
            await Data.updateOne({ Supplier_ID: UserData.Supplier_ID }, { $set: getOneData });
            res.status(200).json({ Message: "Updated" } );
        }else{
            res.status(200).json({ Message: "already create this " + UserData.NameM });
            return
        }
    }catch(e){

    }
  
}

module.exports = {
    UserStatus,
}