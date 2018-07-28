const mongoose = require('mongoose');
const Transacao = mongoose.model('Transacao');
const Cliente = mongoose.model('Cliente');
const Conta = mongoose.model('Conta');
const moment = require('moment');
  
exports.get = (req, res, next) => {
	const transactions = [];
	const today = moment().startOf('day');
	const tomorrow = moment(today).endOf('day');

	transactions = Transacao.find({
		nconta: nconta,
		createdAt:{
		 	$gte: today.toDate(),
			$lt: tomorrow.toDate()
		}
	});

	res.status(200).send({
		transactions: transactions,
	});
}

exports.post = (req, res, next) => {
	const nconta = req.body.nconta;
	const cliente = Cliente.find({nconta: nconta});
	const transactions = [];
	var saldo_atual;

	if(cliente == null){
		res.status(200).send({
			message: "Não há cliente associado à essa conta",
			transactions: []
		});
	}else{
		saldo_atual = Conta.find({nconta: nconta}).saldo;
		transactions = Transacao.find({nconta : nconta});
		res.status(200).send({
			message: "",
			transactions: transactions,
			cliente: cliente.nome,
			saldo_atual: saldo_atual
		});
	}
} 