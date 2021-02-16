const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    user_name:{ type : String , required : true,minlength:5}, 

        email_id: {
            type: String,
            //unique:[true, "Email is already in Use"],
            required : true,
            trim: true,
            lowercase: true,
            /*validator(value){
                if(!validator.isEmail(value)){ throw new Error("Invalid Email address")}
            },*/
        },
        password: {
            type: String,
            minlength: 8,
            required:true,
        },
    club_admin : { type : Boolean , default : false},
    super_admin : { type : Boolean , default : false},
}, {
    autoCreate: true
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;