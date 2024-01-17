const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const login =  require('./login')


var jsonParser = bodyParser.json()


var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get("/cadastrar", function(req,res){
    res.render("cadastrar")
});
app.get("/login", function(req,res){
    res.render("login")
});


app.post("/cadastro", function(req,res){
     //res.send("nome: " +  req.body.loginCadastro +  "senha: " + req.body.senhaCadastro)
     login.create({
        user : req.body.loginCadastro,
        password : req.body.senhaCadastro  
    }).then(function(){
        res.send("sucesso")
    }).catch(function(erro){
        res.send("Deu erro" + erro)
    })

});
app.post("/logar", function(req,res){
    res.send("login feito com sucesso, olá " + req.body.loginCadastro)

});
app.listen(8080);






