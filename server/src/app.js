const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = express.Router();//define as rotas de URL


//Conecta ao banco
mongoose.connect('mongodb://localhost/banco_db');

//Carrega os modelos
const Cliente = require('./models/cliente');
const Conta = require('./models/conta');

//Carrega as rotas
const clienteRoute = require('./routes/cliente-route.js');

app.use(cors());

//Identifica as requisições POST como objetos JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

//Definição de uso das rotas
app.use('/', clienteRoute);

module.exports = app;