const express = require('express')
require('dotenv').config()
const app = express()
const PORT = 4000

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get('/login',(req,res)=>{
    res.send("<h1>Login to the Page</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Is Listening On PORT ${process.env.PORT}`);
})