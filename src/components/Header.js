import React, { Component } from 'react';
import {Navbar, Nav } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
     <Navbar>
       <Nav>
         <Nav.Link>Link</Nav.Link>
       </Nav>
     </Navbar>
    );
  }
}
