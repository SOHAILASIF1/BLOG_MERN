import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import DBConnection from "./config/db.js"
import userRouter from './routes/user.routes.js'

const app=express()

dotenv.config({path:'config/config.env'})

DBConnection()
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.listen(process.env.PORT,()=>{
    console.log(`app is running at ${process.env.PORT}` );
})
app.use('/api',userRouter)