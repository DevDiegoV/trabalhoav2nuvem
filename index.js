var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("<h1>Bem vindo ao meu site!</h1>");
})

app.get('/produtos', function (req, res) {
    res.send("<h2>Lista de produtos</h2>");
})

app.get('/cadastro/:nome?', function (req, res) {
    var nome = req.params.nome;
    if(nome){
        res.send(`<h3>Produto ${nome} criado com sucesso! </h3>`);
    } else {
        res.send("<h3>Nenhum produto cadastrado<h3>");
    }
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})