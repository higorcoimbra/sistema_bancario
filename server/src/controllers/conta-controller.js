const mongoose = require('mongoose');
const Conta = mongoose.model('Conta');
const Cliente = mongoose.model('Cliente');

exports.get = (req, res, next) => {
	var dados = []
	var contas = [];
	var clientes = Cliente.find({});
	clientes.forEach(function(cliente){
		contas.push(Conta.find({nconta:cliente.nconta}));
	});
	for(var i = 0;i < clientes.length; i++){
		dados.push({
			nconta: clientes[i].nconta,
			nome: clientes[i].nome,
			saldo: conta[i].saldo
		});
	}
}