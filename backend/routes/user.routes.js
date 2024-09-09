import express from "express"
import { login, signupUser } from "../controller/user.controller.js"
const router=express.Router()
router.post("/user/signup",signupUser)
router.post("/user/login",login)
export default router