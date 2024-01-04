const express = require("express");
const app = express();
const bodyParser = require("body-parser");


var jsonParser = bodyParser.json()


var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get("/cadastrar", function(req,res){
    res.render("cadastrar")
});
app.get("/login", function(req,res){
    res.render("login")
});


app.post("/cadastro", function(req,res){
     res.send("nome: " +  req.body.loginCadastro +  "senha: " + req.body.senhaCadastro)
});
app.post("/logar", function(req,res){
    res.send("login feito com sucesso, olá " + req.body.loginCadastro)

});
app.listen(8080);






