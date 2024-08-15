const express = require('express') 
const app = express() // INICIANDO O EXPRESS
const {   create  } = require('express-handlebars')  // INICIANDO O HANDLEBARSS
const hbs = create({default: 'main', // CORPO PRINCIPAL A SEGUIR "ESTRUTURA BASE DAS PÁGINAS"
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
})
const bodyParser = require('body-parser') // DEFININDO O BODY PARSER
const Post = require('./models/Post') // IMPORTAÇÃO DE VARIAVEL DE CONTROLE DE ACESSO AO DB


//CONFGURAÇÕES DO PROJETO
    // CONEXÃO COM O BANDO DE DADOS MySql 

       
    // CONFIGURANDO TEMPLATE ENGINE'
        app.engine('handlebars', hbs.engine)
        app.set('view engine', 'handlebars')
    // Body-Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
        
        
        
        // CONFIGURANDO ROTAS


 app.get('/', (req, res) =>{  // ROTA PRINCIPAL QUE MOSTRA OS POSTS

    Post.findAll({order:[['id', 'DESC']]}).then((post)=>{ // TRAZ DO BANCO DE DADOS TODOS OS DADOS DE POSTAGENS
        res.render('index', { post: post }) // ENVIA PARA O INDEX.HANDLEBARS
        console.log(post);
        
    })

})       
        
app.get('/deletar/:id', (req,res)=>{ // ROTA PARA DELEÇÃO DOS POSTS
    Post.destroy({where: {id: req.params.id}}).then(()=>{ // METODO "DESTROY" É UMA FORMA DE APAGAR ATRAVÉS DO SEQUELIZE
        res.send('Foi deletado')
    }).catch((err)=>{
        res.send('Alvo de deleção não existente ' + err)
    })
})

app.get('/cadastro', (req,res) =>{ // ROTA DE CADASTRAR POSTAGEM
    res.render('formulario')
})
app.post('/foiadd', (req,res)=>{ // ROTA DE NOTIFICAÇÃO DE CADATRO DE POST
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>res.redirect('/')).catch((err)=> res.send('Deu um erro mano: '+ err))
})
app.listen(3000, (porta)=>{ //DEFININDO A PORTA DE ACESSO À APLICAÇÃO
    console.log('SERVIDOR RODANDO na porta 3000');
    
})

