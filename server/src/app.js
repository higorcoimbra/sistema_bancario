const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
//Identifica as requisições POST como objetos JSON
app.use(bodyParser.json());


//Conecta ao banco
mongoose.connect('mongodb://localhost/banco_db');

//Carrega os modelos
const Cliente = require('./models/cliente');
const Conta = require('./models/conta');
const Transacao = require('./models/transacao');

//Carrega as rotas
const clienteRoute = require('./routes/cliente-route.js');
const transacaoRoute = require('./routes/transacao-route.js');
const contaRoute = require('./routes/conta-route.js');

//Definição de uso das rotas
app.use('/', clienteRoute);
app.use('/transacoes', transacaoRoute);
app.use('/contas', contaRoute);


module.exports = app;