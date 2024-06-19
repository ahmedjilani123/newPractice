const Data = require("../Schema");
const UserStatus = async (req, res) => {
    var UserData = req.body;
    console.log(UserData);
    var getOneData = await Data.findOne({ Supplier_ID: UserData.Supplier_ID });
    var allstatus = getOneData.AllStatus;

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
    var count = 0;
    allstatus.forEach((getstatus) => {
        if (StatusData == getstatus.mainStatus) {
            count++;
        }
    })
    if (count == 0) {
        getOneData.Status = StatusData;
        getOneData.AllStatus.push({ remark: UserData.remark, mainStatus: StatusData });
        console.log(getOneData);
        await Data.updateOne({ Supplier_ID: UserData.Supplier_ID }, { $set: getOneData })
        res.status(200).json({ Message: "Updated" });
    }else{
        res.status(200).json({ Message: "already update this "+ UserData.NameM });
    }

}
module.exports = {
    UserStatus,
}