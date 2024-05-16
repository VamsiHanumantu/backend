// require('dotenv').config({path:'./env})

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from 'express'

const app = express()

dotenv.config({
  path : './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})






/*
;(async ()=>{
    try{

      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
      app.on("error",()=>{
        console.log("ERRR: ",error);
        throw err;
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
      })

    }catch(error){
        console.error(error);
        throw errr
    }

})()*/