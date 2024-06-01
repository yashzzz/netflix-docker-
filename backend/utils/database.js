import  mongoose from "mongoose";
// import dotenv from "dotenv";


// dotenv.config({
//      path:"../.env"
// })

const databaseConnection = () =>{
          mongoose.connect("mongodb+srv://shreynetflix:shreynet@shreynetflix.a1gqsua.mongodb.net/").then(()=>{
          console.log("mongodb connected successfully")
         }).catch((error)=>{
          console.log(error);
         })
    }

    export default databaseConnection;
