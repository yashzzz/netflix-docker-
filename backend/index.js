// const express = require('express');
import express from "express";
 import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
import router from "./routes/userRoute.js";
import cors from "cors";

databaseConnection();

dotenv.config({
    path:".env"
})

const app = express();



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions ={
    origin:'http://mongodb:3000',
    credentials:true
}
app.use(cors(corsOptions));


app.use("/api/v1/user",router );

app.listen(process.env.PORT,() =>{
    console.log(`server started at port ${process.env.PORT}`);
})
