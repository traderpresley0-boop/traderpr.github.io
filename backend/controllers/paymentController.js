import Payment from "../models/Payment.js"

export const createPayment=async(req,res)=>{
  const {amount}=req.body

  const payment=new Payment({
    userId:req.user.id,
    amount,
    method:"Kwik"
  })

  await payment.save()

  res.json({
    message:"Faça transferência Kwik",
    referencia:payment._id
  })
}
