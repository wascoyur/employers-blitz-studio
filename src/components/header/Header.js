import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="secondary">
        <Nav>
          <Nav.Link>Рликамп</Nav.Link>
          <Nav.Link>Саватар</Nav.Link>
          <Nav.Link>Субердумп</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
