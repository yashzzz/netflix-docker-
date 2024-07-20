import  mongoose from "mongoose";
// import dotenv from "dotenv";


// dotenv.config({
//      path:"../.env"
// })

const databaseConnection = () =>{
          mongoose.connect("mongodb+srv://yashsaxena935:u58vgWz8stC8UUtv@test-pro-db.k69tkkl.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db").then(()=>{
          console.log("mongodb connected successfully")
         }).catch((error)=>{
          console.log(error);
         })
    }

    export default databaseConnection;
