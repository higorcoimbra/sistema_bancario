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
	      nconta: ''
	    };

	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.recordData = this.recordData.bind(this);
	}

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
  	}

	validateAccountNumber() {
	    const accNumber = this.state.nconta;
	    if(accNumber.length === 5 && !Number.isNaN(parseInt(accNumber, 10))) return 'success';
	    else return 'error';
	}

	recordData(){
		alert(JSON.stringify(this.state));
		fetch('http://localhost:5000/', {
			method: 'POST',
			headers:{
				'Content-Type':'application/json',
			},
			body: JSON.stringify(this.state)
		}).then(res => console.log(res.status));
	}

	render(){
		return(
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
			      <ReactBootstrap.Button id="signUpSubmit" type="submit">Sign Up</ReactBootstrap.Button>
			    </ReactBootstrap.Col>
			  </ReactBootstrap.FormGroup>
			</ReactBootstrap.Form>
		);
	}
}

export default SignUpForm;