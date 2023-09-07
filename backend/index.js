

// const mongoose=require('mongoose')
const express = require('express')
const { connection } = require('./config/db')
const { UserModel } = require('./model/UserModel')
const app = express()
const jwt=require('jsonwebtoken')
const { LoanRouter } = require('./routes/LoanRoutes')
const { Auth } = require('./middleware/Auth')
require('dotenv').config()
app.use(express.json())
app.use('/loan',Auth)
app.use("/loan",LoanRouter)

app.get("/", (req, res) => {
    res.send("WelCome to The Loan Services")
})


app.post("/register", async (req, res) => {
    let data = req.body
    try {
        let newData = new UserModel(data)
        await newData.save()
        res.send({ "msg": "You have been registered successfully" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot register", "error": err.message })
    }

})



app.post("/login",async(req,res)=>{
    let data=req.body
    try{
     let singleData= await UserModel.findOne({email:data.email})
    
     if(singleData){
    let token = jwt.sign({ UserID: singleData._id }, 'jitendra');
     await UserModel.findByIdAndUpdate({_id:singleData._id},{is_Active:true})
     res.send({ "msg": "Login Successfull", "token": token })
     }else{
        res.send("please enter valid credentils")
     }
    }catch(err){
        res.send({ "msg": "somthing went wrong! cannot login", "error": err.message })
    }
})



app.get("/alluser",async(req,res)=>{
    try{
      let alData= await UserModel.find()
       res.send(alData)
    }catch(err){
        res.send({ "msg": "somthing went wrong! cannot get Data", "error": err.message })
    }
})




app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (err) {
        console.log(err)
    }
    console.log(`Server running on port ${process.env.port}`)
})







