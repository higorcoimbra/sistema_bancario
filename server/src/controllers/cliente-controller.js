const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');
const Conta = mongoose.model('Conta');

exports.post = (req, res, next) => {
	var cliente = new Cliente();
	var conta = new Conta();
	cliente.nome = req.body.nome;
	cliente.idade = parseInt(req.body.idade,10);
	cliente.endereco = req.body.endereco;
	cliente.nconta = req.body.nconta;
	cliente
	 	.save((err) => {
	 		if(err){
	 	 		res.status(400).send({
	 	 	    	message:'Erro ao cadastrar o cliente', 
	 	 	    	data:err 
	 	 		});
	 	 	}else{
	 	 		conta.nconta = req.body.nconta;
	 	 		conta.saldo = 0;
	 	 		conta.save((err) => {
	 	 			if(err){
	 	 				res.status(400).send({
			 	 	    	message:'Erro ao criar a conta', 
			 	 	    	data:err 
			 	 		});
	 	 			}
	 	 		});
	 	 		res.status(201).send({
	 	 			message:'Cliente cadastrado com sucesso'
	 	 		}); 
	 	 	} 
	 	});﻿
} 