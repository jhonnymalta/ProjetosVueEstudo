const express = require("express");
const app = express();



app.get("/", (req, res) => {
    res.send("Bem Vindo a API NODE JS!");
})
app.get("/clientes", (req, res) => {
    res.send("Bem Vindo a aba clientes da sua api");
})


app.listen(8080, function (erro) {
    if (erro) {
        console.log(erro);
    } else {
        console.log("Servidor Rodando na porta 8080");
    }
})