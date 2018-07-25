import React, { Component } from 'react';
import './header-menu.css';
import * as ReactBootstrap from 'react-bootstrap';

class HeaderMenu extends Component {
  render() {
    return (
      <ReactBootstrap.Navbar>
		  <ReactBootstrap.Navbar.Header>
		    <ReactBootstrap.Navbar.Brand>
		      <a href="#brand">Sistema Bancário</a>
		    </ReactBootstrap.Navbar.Brand>
		    <ReactBootstrap.Navbar.Toggle />
		  </ReactBootstrap.Navbar.Header>
		  <ReactBootstrap.Nav>
		    <ReactBootstrap.NavItem eventKey={1} href="#">
		      Cadastro
		    </ReactBootstrap.NavItem>
		    <ReactBootstrap.NavItem eventKey={2} href="#">
		      Extratos
		    </ReactBootstrap.NavItem>
		    <ReactBootstrap.NavItem eventKey={2} href="#">
		      Relatórios
		    </ReactBootstrap.NavItem>
		    <ReactBootstrap.NavItem eventKey={2} href="#">
		      Saldos
		    </ReactBootstrap.NavItem>
		  </ReactBootstrap.Nav>
	   </ReactBootstrap.Navbar>
    );
  }
}

export default HeaderMenu;
