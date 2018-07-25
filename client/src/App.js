import React, { Component } from 'react';
import * as ReactBootsrap from 'react-bootstrap';
import './App.css';
import HeaderMenu from './components/header-menu/header-menu.js';
import SignUpForm from './components/signup-form/signup-form.js';

class App extends Component {
  render() {
    return (
        <ReactBootsrap.Grid>
          <ReactBootsrap.Row>
            <HeaderMenu />
          </ReactBootsrap.Row>
          <ReactBootsrap.Row align="center"> 
              <h2>Cadastro de Clientes</h2>
          </ReactBootsrap.Row>
          <ReactBootsrap.Row>
            <SignUpForm />
          </ReactBootsrap.Row>
        </ReactBootsrap.Grid>
    );
  }
}

export default App;
