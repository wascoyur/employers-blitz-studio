import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="secondary">
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Рликамп</Nav.Link>
          <Nav.Link>Саватар</Nav.Link>
          <Nav.Link>Субердумп</Nav.Link>
          <Form inline>
            <FormControl type='text' placeholder="Найти персонажа" className="mr-sm-2"/>
            <Button
            onClick = {() =>{}}
            >Найти</Button>
          </Form>
        </Nav>
      </Navbar>
    );
  }
}
