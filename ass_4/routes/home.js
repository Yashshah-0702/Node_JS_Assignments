const express = require('express')
const router = express.Router()
const product = []

router.get('/',(req,res)=>{
    res.render('form')
})

router.post('/use',(req,res)=>{
    product.push({title:req.body.user})
    res.redirect('/users')
    // console.log('products',product)
    
})
router.get('/users',(req,res)=>{
    res.render('users',{product})
})

module.exports=router

