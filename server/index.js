import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express()
dotenv.config()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/',(req,res)=> {
    res.send('Server is live');
})
app.use("/api/inngest", serve({ client: inngest, functions }));

await connectDB()

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is listening at http://localhost:${PORT}`)
})