const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
   
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_Active: { type: Boolean, required: true },
    is_Admin: { type: Boolean, required: true },

},{
    versionKey:false
})

const UserModel = mongoose.model("loan_user", UserSchema)



module.exports = {
    UserModel
}

