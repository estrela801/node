const express = require('express')
const { dirname } = require('path')
const app = express()

app.get('/', (req,res)=>{
    res.send('Deu certo')
})
app.get('/index', (req,res)=>{
    res.sendFile(__dirname + '/html/index.html')
})
app.get('/eu', (req,res)=>{
    res.send('Deu certo, eu sou gostoso')
})
app.get('/ola', (req,res)=>{
    res.send('Deu certo, ola')
})

app.listen(1112, ()=>{
    console.log('Foi');
    
})

