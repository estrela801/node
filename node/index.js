const express = require('express')
const { dirname } = require('path')
const app = express()
const handlebars = require('express-handlebars')

// Conexão coom obanco de dados 
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('cadastro', 'root', 'estrela801rodrigo187', {
        host : 'localhost',
        dialect : 'mysql'
    })
    // Configurando a template engine
     app.engine('handlebars', handlebars({defaultLayout: 'main'}))
     app.set('view engine', 'handlebars')



// Definindo porta de acesso
app.listen(1112, ()=>{
    console.log('Foi');
    
})

