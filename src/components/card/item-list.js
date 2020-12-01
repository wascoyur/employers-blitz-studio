import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap'

export default class ItemList extends Component{
 state = {

 }
 render(){
  return(
    <ListGroup>
      <ListGroup.Item>1. Пункут</ListGroup.Item>
      <ListGroup.Item>2. Пункут</ListGroup.Item>
      <ListGroup.Item>3. Пункут</ListGroup.Item>
    </ListGroup>
  )
 }
}