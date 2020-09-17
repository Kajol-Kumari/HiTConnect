const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    user_name: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    email_id: {
        type: String,
        required: true,
        unique: true
    },

}, {
    autoCreate: true
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;