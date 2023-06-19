const express = require('express')
const app = express()
const home= require('./routers/home')
const path = require('path')

app.use(express.static(path.join(__dirname,"public")))
app.use(home)

app.use((req,res)=>{res.sendFile(path.join(__dirname,'views','404.html'))})

app.listen(7800)