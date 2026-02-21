import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
  amount:Number,
  method:{type:String, default:"Kwik"},
  status:{type:String, default:"pendente"},
  createdAt:{type:Date, default:Date.now}
})

export default mongoose.model("Payment", paymentSchema)
