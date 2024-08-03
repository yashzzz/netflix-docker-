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

// Update CORS configuration to allow requests from the frontend
const corsOptions ={
    origin: 'http://localhost:3000', // Allow requests from the frontend running on port 3000
    credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/v1/user", router);

// Bind the server to '0.0.0.0' to accept connections from any network interface
app.listen(process.env.PORT || 8000, '0.0.0.0', () => {
    console.log(`Server started at port ${process.env.PORT || 8000}`);
});
