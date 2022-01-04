const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        maxlength :32,
        trim:true
    },

    lastName: {
        type: String,
        required: true,
        maxlength:32,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: { //bcrypt
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        default: Date.now()
    }

})

UserSchema.pre("save",async function(next){

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
const hash = await bcrypt.hash(this.password,salt)

this.password = hash;
next()

})

const UserModel = mongoose.model("User",UserSchema)

module.exports  = UserModel;