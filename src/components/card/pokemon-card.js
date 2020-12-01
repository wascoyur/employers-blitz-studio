import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';

export default class CardItem extends Component {
state={
active: true,
dataItem:{
  name:'name',
  growth:0,
  img:'url',
  weght: 0,
  type: null
}

}
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= 'this.state.dataItem' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
