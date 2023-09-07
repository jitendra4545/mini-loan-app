const express=require('express')
const { Auth } = require('../middleware/Auth')
const { LoanModel } = require('../model/LoanModel')


const LoanRouter=express.Router()





LoanRouter.post("/create",async(req,res)=>{
    let data=req.body
    console.log(data)
    try{
       let newLoan=await LoanModel(data)
       await newLoan.save()
       res.send({ "msg": "You have been successfully applied for a loan" })
    }catch(err){
        res.send({ "msg": "somthing went wrong! unable to apply", "error": err.message })
    }
})


LoanRouter.get("/",async(req,res)=>{
    const id=req.body.UserID

    try{
        let userData=await LoanModel.find({UserID:id})
        res.send(userData)
    }catch(err){
        res.send({ "msg": "somthing went wrong! unable to get data", "error": err.message })
    }
})


LoanRouter.get("/all",async(req,res)=>{

    try{
        let userData=await LoanModel.find()
        res.send(userData)
    }catch(err){
        res.send({ "msg": "somthing went wrong! unable to get data", "error": err.message })
    }
})


LoanRouter.patch("/:id",async(req,res)=>{
let id=req.params.id

try{
    let updateData= await LoanModel.findByIdAndUpdate({_id:id},{status:true})
    // console.log(updateData)
    res.send({ "msg": "You loan successfully approved " })
}catch(err){
    res.send({ "msg": "somthing went wrong! unable to update data", "error": err.message })
}


})




module.exports={
    LoanRouter
}