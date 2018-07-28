import React, { Component } from 'react';
import './header-menu.css';
import * as ReactBootstrap from 'react-bootstrap';
import {NavLink} from "react-router-dom";

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
		   	  <NavLink to="/">
		      	Cadastro
		      </NavLink>
		    </ReactBootstrap.NavItem>
		    <ReactBootstrap.NavItem eventKey={2} href="#">
		      <NavLink to="/extratos">
		      	Extratos
		      </NavLink>	
		    </ReactBootstrap.NavItem>
		    <ReactBootstrap.NavItem eventKey={2} href="#">
		      <NavLink to="/relatorios">
		      	Relatórios
		      </NavLink>	
		    </ReactBootstrap.NavItem>
		    <ReactBootstrap.NavItem eventKey={2} href="#">
		      <NavLink to="/saldos">
		      	Saldos
		      </NavLink>	
		    </ReactBootstrap.NavItem>
		  </ReactBootstrap.Nav>
	   </ReactBootstrap.Navbar>
    );
  }
}

export default HeaderMenu;
