const express = require('express')
const { Auth } = require('../middleware/Auth')
const { LoanModel } = require('../model/LoanModel')


const LoanRouter = express.Router()





LoanRouter.post("/create", Auth, async (req, res) => {
    let { amount, tenure, status, date, UserID,paid } = req.body

    try {
        let newLoan = await LoanModel({ amount, tenure, status, date, weeklyRepay: amount / tenure, UserID ,paid})
        await newLoan.save()
        res.send({ "msg": "You have been successfully applied for a loan" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! unable to apply", "error": err.message })
    }
})


LoanRouter.get("/", Auth, async (req, res) => {
    const id = req.body.UserID

    try {
        let userData = await LoanModel.find({ UserID: id })
        res.send(userData)
    } catch (err) {
        res.send({ "msg": "somthing went wrong! unable to get data", "error": err.message })
    }
})


LoanRouter.get("/all", Auth, async (req, res) => {

    try {
        let userData = await LoanModel.find()
        res.send(userData)
    } catch (err) {
        res.send({ "msg": "somthing went wrong! unable to get data", "error": err.message })
    }
})


LoanRouter.patch("/:id", Auth, async (req, res) => {
    let id = req.params.id

    try {
        let updateData = await LoanModel.findByIdAndUpdate({ _id: id }, { status: true })
        res.send({ "msg": "You loan successfully approved " })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! unable to update data", "error": err.message })
    }


})



LoanRouter.post("/paid/:id", Auth, async (req, res) => {
    let id = req.params.id

    try {
        let updateData = await LoanModel.findById({ _id: id })
updateData.paid+=1
await updateData.save()
       
        res.send({ "msg": "You loan successfully paid " })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! unable to update data", "error": err.message })
    }


})












module.exports = {
    LoanRouter
}