const mongoose = require('mongoose')



const LoanScheme = mongoose.Schema({
    amount: { type: Number, required: true },
    tenure: { type: Number, required: true },
    status: { type: Boolean },
    date: { type: String, required: true },
    UserID:{type:String},
    weeklyRepay:Number,
    paid:Number
},{
    versionKey:false
})



const LoanModel = mongoose.model("loan", LoanScheme)



module.exports = {
    LoanModel
}