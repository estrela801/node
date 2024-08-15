const db = require('./db')
const Post = db.sequelze.define('postagens',{ //CRIANDO TABELA
    titulo:{
        type: db.Sequelize.STRING 
    },
    conteudo:{
        type:db.Sequelize.TEXT
    }
}) //DEFININCO ESTRUTURA DA TABELA

//   A TABELA JÁ FOI CRIADA

module.exports = Post