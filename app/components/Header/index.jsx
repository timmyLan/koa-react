import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer,IndexLinkContainer} from 'react-router-bootstrap';
export default class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>React-Koa</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to='/'>
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to='/picture'>
              <NavItem eventKey={2}>Picture</NavItem>
            </LinkContainer>
            <LinkContainer to='/counter'>
              <NavItem eventKey={3}>Counter</NavItem>
            </LinkContainer>
            <LinkContainer to='/button'>
              <NavItem eventKey={4}>Button</NavItem>
            </LinkContainer>
            <LinkContainer to='/form'>
              <NavItem eventKey={4}>Form</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

