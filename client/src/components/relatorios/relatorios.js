import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './relatorios.css';

class Relatorios extends Component {
  constructor(){
    super();
    this.state = {
      transactions: [],
      message: '',
      show: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTransactionsResponse = this.handleTransactionsResponse.bind(this);
  }

  //resgata do servidor todas as transações realizadas no dia atual no momento em que o componente é montado.
  componentDidMount(){
    var state = this.state;
    state.date = "true"; 

    fetch("/transactions")
      .then(function(res){
          res = res.JSON();
          this.handleTransactionsResponse(res['transactions']);
      });
  }

  //processa a entrada dada por um campo em um formulário
  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
  }

  //processa a resposta dada pelo servidor, quando requisitado a todas as transações realizadas no dia atual
  handleTransactionsResponse(transactions){
    if(transactions.length === 0){
    	this.setState({
    		message: "Não existem transações para o dia de hoje",
    		transactions: [],
    		show: true
    	})
    }else{
    	this.setState({
    		message: "",
    		transactions: transactions,
    		show: false
    	});
    }
  }

  //exibe uma mensagem de erro logo acima da parte principal da componente
  renderErrorMessage(){
    if(this.state.show === true){
      return <ReactBootstrap.Alert bsStyle="danger">{this.state.message}</ReactBootstrap.Alert>;
    }
    return null;
  }

  render() {
    return (
      <ReactBootstrap.Row>
	    <div>
	     {this.renderErrorMessage()} 
	    </div>
	    <h2 align="center">Relatórios - Operações do dia</h2>
	      
        <div id="tabelaRelatorios">
          <ReactBootstrap.Table striped bordered condensed hover>
            <thead>
              <tr>
                <th class="head">Cliente - Conta nº</th>
                <th class="head">Operação</th>
                <th class="head">Saldo Ant. (R$)</th>
                <th class="head">Saldo após op. (R$)</th>
                <th class="head">Data</th>
              </tr>
            </thead>
            <tbody>
             {this.state.transactions.map(transaction => 
                <tr>
                  <td class="col">{transaction.nconta}</td>
                  <td class="col">{transaction.operacao}</td>
                  <td class="col">{transaction.saldo_ant}</td>
                  <td class="col">{transaction.saldo_pos}</td>
                  <td class="col">{transaction.data}</td>
                </tr>
              )}
            </tbody>
          </ReactBootstrap.Table>
        </div>
      </ReactBootstrap.Row>
    );
  }
}

export default Relatorios;