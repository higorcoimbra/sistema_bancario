import React, { Component } from 'react';
import * as ReactBootsrap from 'react-bootstrap';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import HeaderMenu from './components/header-menu/header-menu.js';
import SignUpForm from './components/signup-form/signup-form.js';
import Extratos from './components/extratos/extratos.js';
import Relatorios from './components/relatorios/relatorios.js';
import Saldos from './components/saldos/saldos.js';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <ReactBootsrap.Grid>
            <ReactBootsrap.Row className="header">
              <HeaderMenu />
            </ReactBootsrap.Row>
            <Route exact path="/" component={SignUpForm}/>
            <Route path="/extratos" component={Extratos}/>
            <Route path="/relatorios" component={Relatorios}/>
            <Route path="/saldos" component={Saldos}/>
          </ReactBootsrap.Grid>
        </HashRouter>
    );
  }
}

export default App;
