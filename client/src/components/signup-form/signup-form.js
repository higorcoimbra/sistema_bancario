import React, { Component } from 'react';
import './signup-form.css';
import * as ReactBootstrap from 'react-bootstrap';

class SignUpForm extends Component {

	constructor(props, context) {
	    super(props, context);
	    this.state = {
	      nome: '',
	      idade: 0,
	      endereco: '',
	      nconta: '',
	      showSucess: false,
	      showError: false
	    };

	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.recordData = this.recordData.bind(this);
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

  	//validação do campo de número da conta do formulário presente na componente.
	validateAccountNumber() {
	    const accNumber = this.state.nconta;
	    if(accNumber.length === 5 && !Number.isNaN(parseInt(accNumber, 10))) return 'success';
	    else return 'error';
	}

	recordData(){
		fetch('/',{
			method: 'POST',
			headers:{
				'Content-type': 'application/json'
			},
			body: JSON.stringify(this.state)
		}).then(function(res){
			if(res.status === 201){
				this.setState({showSucess: true, showError: false});
			}else{
				this.setState({showError: true, showSucess:false});
			}
		});
	}

	//exibe uma mensagem de erro no cadastro do cliente logo acima da parte principal da componente
  	renderErrorMessage(){
    	if(this.state.showError === true){
	      return <ReactBootstrap.Alert bsStyle="danger">Erro ao cadastrar cliente</ReactBootstrap.Alert>;
	    }
	    return null;
	}

	//exibe uma mensagem de sucesso do cadastro do cliente logo acima da parte principal da componente
	renderSuccessMessage(){
	    if(this.state.showSuccess === true){
	      return <ReactBootstrap.Alert bsStyle="success">Cliente cadastrado com sucesso</ReactBootstrap.Alert>;
	    }
	    return null;
	  }

	render(){
		return(
			<ReactBootstrap.Row>
				<div>
	              {this.renderSuccessMessage()} 
	            </div>
	            <div>
	              {this.renderErrorMessage()} 
	            </div>
				<h2 align="center">Cadastro de Cliente</h2>
				<ReactBootstrap.Form horizontal id="signUpForm" onSubmit={this.recordData}>
				  <ReactBootstrap.FormGroup>
				    <ReactBootstrap.Col sm={10}>
				      <ReactBootstrap.FormControl
				      	type="text" 
				      	placeholder="Nome"
				      	name="nome"
				      	value={this.state.nome}
				      	onChange = {this.handleInputChange}
				      />
				    </ReactBootstrap.Col>
				  </ReactBootstrap.FormGroup>

				  <ReactBootstrap.FormGroup>
				    <ReactBootstrap.Col sm={10}>
				      <ReactBootstrap.FormControl
				      	type="number"
				      	min="0"
				      	max="120"
				      	placeholder="Idade"
				      	name="idade"
				      	value={this.state.idade}
				      	onChange = {this.handleInputChange} 
				    />
				    </ReactBootstrap.Col>
				  </ReactBootstrap.FormGroup>

				  <ReactBootstrap.FormGroup>
				    <ReactBootstrap.Col sm={10}>
				      <ReactBootstrap.FormControl
				      	type="Text"
				      	placeholder="Endereço"
				      	name="endereco"
				      	value={this.state.endereco}
				      	onChange = {this.handleInputChange}
				       />
				    </ReactBootstrap.Col>
				  </ReactBootstrap.FormGroup>

				  <ReactBootstrap.FormGroup  validationState={this.validateAccountNumber()} controlId="formAccountNumber">
				    <ReactBootstrap.Col sm={10}>
				      <ReactBootstrap.FormControl
				      	type="text"
				      	value={this.state.nconta}
				      	name="nconta"
				      	placeholder="Nº da conta"
				      	onChange = {this.handleInputChange} />
				      <ReactBootstrap.FormControl.Feedback />
	          		  <ReactBootstrap.HelpBlock>Número da conta deve conter 5 dígitos</ReactBootstrap.HelpBlock>
				    </ReactBootstrap.Col>
				  </ReactBootstrap.FormGroup>

				  <ReactBootstrap.FormGroup>
				    <ReactBootstrap.Col sm={10}>
				      <ReactBootstrap.Button id="signUpSubmit" type="submit">Cadastrar</ReactBootstrap.Button>
				    </ReactBootstrap.Col>
				  </ReactBootstrap.FormGroup>
				</ReactBootstrap.Form>
			</ReactBootstrap.Row>
		);
	}
}

export default SignUpForm;