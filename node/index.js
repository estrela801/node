const express = require('express')
const { dirname } = require('path')
const app = express()
const {   create  } = require('express-handlebars')
const hbs = create({default: 'main'})
const bodyParser = require('body-parser')



//CONFGURAÇÕES DO PROJETO
    // CONEXÃO COM O BANDO DE DADOS MySql 
        const Sequelize = require('sequelize')
        const sequelize = new Sequelize('cadastro', 'root', 'estrela801rodrigo187', {
            host : 'localhost',
            dialect : 'mysql'
        })
    // CONFIGURANDO TEMPLATE ENGINE'
        app.engine('handlebars', hbs.engine)
        app.set('view engine', 'handlebars')
    // Body-Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())



// CONFIGURANDO ROTAS 

app.get('/cadastro', (req,res) =>{
    res.render('formulario')
})
app.post('/foiadd', (req,res)=>{

    res.send("formulario recebido <br>" + 'Titulo = '+ req.body.titulo +'<br> Conteúdo = '+req.body.conteudo)
})
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO');
    
})

