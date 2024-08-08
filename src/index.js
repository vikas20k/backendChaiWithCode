//require('dotenv').config({ path: './evn' }) 
import mongoose from "mongoose";// this is use with fist aproch
import { DB_NAME } from "./constant.js";// this is use with fist aproch
import connectDB from "./db/indexDB.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()







































// this is a fist aproch to connect to detabase and second method in db/indexDB.js file
/*
import express from "express"
const app = express()
    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error", () => {
                console.log("ERROR:", error)
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`App is listening on Port ${process.env.PORT}`)
            })

        } catch (error) {
            console.error("ERROR:", error)
            throw error
        }
    })();*/