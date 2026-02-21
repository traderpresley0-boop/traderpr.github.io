import User from "../models/User.js"
import Payment from "../models/Payment.js"
import jwt from "jsonwebtoken"

export const adminLogin=async(req,res)=>{
  const {email,password}=req.body

  if(email==="admin@site.com" && password==="admin123"){
    const token=jwt.sign({role:"admin"},process.env.JWT_SECRET,{expiresIn:"1d"})
    return res.json({token})
  }

  res.status(401).json({message:"Credenciais inválidas"})
}

export const getUsers=async(req,res)=>{
  const users=await User.find().select("-password")
  res.json(users)
}

export const getPayments=async(req,res)=>{
  const payments=await Payment.find().populate("userId","name email")
  res.json(payments)
}
