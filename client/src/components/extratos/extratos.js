import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './extratos.css';

class Extratos extends Component {
  constructor(){
    super();
    this.state = {
      nconta: '',
      transactions: [],
      message: '',
      show: false,
      nome:"",
      salto_atual:0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTransactionsResponse = this.handleTransactionsResponse.bind(this);
    this.renderErrorMessage = this.renderErrorMessage.bind(this);
    this.retrieveTransactions = this.retrieveTransactions.bind(this);
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

  //processa a resposta dada pelo servidor, quando requisitado a enviar as transações de um cliente
  handleTransactionsResponse(message, transactions, cliente, saldo_atual){
    if(message === "Não há cliente associado à essa conta"){
      this.setState({
          transactions: [],
          message: "message",
          cliente: "",
          saldo_atual: 0,
          show: true
        });
    }else{
      if(transactions.length === 0){
        this.setState({
          transactions: [],
          message: "Não há transações registradas para esse cliente",
          cliente: cliente,
          saldo_atual: saldo_atual,
          show: true
        });
      }else{
        this.setState({
          transactions: transactions,
          message: "",
          cliente: cliente,
          saldo_atual: saldo_atual,
          show: false,
        });
      }
    }
  }

  //exibe uma mensagem de erro logo acima da parte principal da componente
  renderErrorMessage(){
    if(this.state.show === true){
      return <ReactBootstrap.Alert bsStyle="danger">{this.state.message}</ReactBootstrap.Alert>;
    }
    return null;
  }

  //acessa o servidor por meio de requisição POST para recuperar as transações realizadas por um cliente
  retrieveTransactions(){
    fetch('/transactions',{
      method: 'post',
      body: JSON.stringify(this.state.nconta)
    })
      .then(function(res){
        res = res.JSON();
        this.handleTransactionsResponse(res['message'], res['transactions'], res['cliente'], res['saldo_atual']);
      })
  }

  //validação do campo de número da conta do formulário presente na componente.
  validateAccountNumber() {
      const accNumber = this.state.nconta;
      if(accNumber.length === 5 && !Number.isNaN(parseInt(accNumber, 10))) return 'success';
      else return 'error';
  }

  render() {
    return (
      <ReactBootstrap.Row>
          <div>
            {this.renderErrorMessage()} 
          </div>
          <h2 align="center">Extratos</h2>
          <ReactBootstrap.Form horizontal id="extratoForm" onSubmit={this.retrieveTransactions}>
            <ReactBootstrap.FormGroup validationState={this.validateAccountNumber()}>
              <ReactBootstrap.Col sm={10}>
                <ReactBootstrap.FormControl
                  type="text" 
                  placeholder="Nº da conta"
                  name="nconta"
                  onChange = {this.handleInputChange}
                />
                <ReactBootstrap.FormControl.Feedback />
                <ReactBootstrap.HelpBlock>Número da conta deve conter 5 dígitos</ReactBootstrap.HelpBlock>
              </ReactBootstrap.Col>
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup>
              <ReactBootstrap.Col sm={10}>
                <ReactBootstrap.Button type="submit">Consultar</ReactBootstrap.Button>
              </ReactBootstrap.Col>
            </ReactBootstrap.FormGroup>
        </ReactBootstrap.Form>
        <div id="tabelaExtratos">
          <p>Cliente:{this.state.cliente}</p>
          <p>Saldo atual:{this.state.saldo_atual}</p>
          <ReactBootstrap.Table striped bordered condensed hover>
            <thead>
              <tr>
                <th class="head">Operação</th>
                <th class="head">Saldo Ant. (R$)</th>
                <th class="head">Saldo após op. (R$)</th>
                <th class="head">Data</th>
              </tr>
            </thead>
            <tbody>
              {this.state.transactions.map(transaction => 
                <tr>
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

export default Extratos;
