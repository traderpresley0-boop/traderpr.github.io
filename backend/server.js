import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB conectado"))

app.use("/api/auth", authRoutes)
app.use("/api/payment", paymentRoutes)
app.use("/api/admin", adminRoutes)

app.listen(5000, ()=> console.log("Servidor rodando"))
