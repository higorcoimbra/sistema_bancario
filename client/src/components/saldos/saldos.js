import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './saldos.css';

class Saldos extends Component{
	constructor(){
		super();
		this.state = {
			dados: []
		}
	}

	componentDidMount(){
		fetch("/contas")
			.then(function(res){
				res = res.JSON();
				this.setState({dados:res});
			});
	}

	render() {
	    return (
	      <ReactBootstrap.Row>
		    <h2 align="center">Saldos</h2>
		      
	        <div id="tabelaRelatorios">
	          <ReactBootstrap.Table striped bordered condensed hover>
	            <thead>
	              <tr>
	                <th class="head">Cliente - Conta nº</th>
	                <th class="head">Nome</th>
	                <th class="head">Saldo Atual</th>
	              </tr>
	            </thead>
	            <tbody>
	             {this.state.dados.map(dadoCliente => 
	                <tr>
	                  <td class="col">{dadoCliente.nconta}</td>
	                  <td class="col">{dadoCliente.nome}</td>
	                  <td class="col">{dadoCliente.saldo}</td>
	                </tr>
	              )}
	            </tbody>
	          </ReactBootstrap.Table>
	        </div>
	      </ReactBootstrap.Row>
    );
  }
}

export default Saldos;