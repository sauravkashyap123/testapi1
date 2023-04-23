const express = require('express')
const app=express()

app.use(cors())



app.get('/login', (req,res)=>{
    // res.sendFile(__dirname+"/views/index.html")
    res.send("hello this is live ")
    })




app.listen(port,()=>{
    console.log("server is running at 3000 ")
})