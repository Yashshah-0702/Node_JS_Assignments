const express = require('express')
const app = express()
const body = require('body-parser')
const home = require('./routes/home')

app.set('view engine','pug')
app.set('views','views')

app.use(body.urlencoded({extended:false}))

app.use(home)
app.use((req,res)=>{
    res.render('error')
})

app.listen(8700)
