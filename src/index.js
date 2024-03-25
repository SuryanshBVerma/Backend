//require('dotenv').config({ path: '../.env' });

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv  from 'dotenv';
import connectDB from "./db/index.js";
import {app} from "./app.js"

// dotenv.config();

dotenv.config({
    path : '../.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO DB CONNECTION ERROR : \n", error);
})























/*
import { express } from "express";

const app = express() 

(async () => {
    try{
        await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error:", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}!`);
        })
    }catch (error) {
        console.error("ERROR : ", error)
        throw err
    }
})()
*/