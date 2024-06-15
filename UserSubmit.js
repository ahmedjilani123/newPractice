const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSubmit = new Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Country:{
        type:String
    },
    Telephone:{
        type:String
    },
    Supplier_ID:{
        type:Number
    }
})
module.exports =mongoose.model("UserSubmit",UserSubmit);