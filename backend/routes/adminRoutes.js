import express from "express"
import {adminLogin,getUsers,getPayments} from "../controllers/adminController.js"
import adminAuth from "../middleware/adminAuth.js"

const router=express.Router()

router.post("/login",adminLogin)
router.get("/users",adminAuth,getUsers)
router.get("/payments",adminAuth,getPayments)

export default router
