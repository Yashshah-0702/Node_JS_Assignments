const express = require('express')
const app = express()

app.use('/users',(req,res,next)=>{
    console.log("First Middleware")
    res.send("<h1>Welcome TO Users Page</h1>")
})

app.use('/',(req,res,next)=>{
    console.log("Second Middleware")
    res.send("<h1>Welcome TO Home Page</h1>")
})
app.listen(3000)

