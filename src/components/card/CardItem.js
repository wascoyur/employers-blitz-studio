import React, { Component } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { getPokeMain } from '../../services/swap-service';

export default class CardItem extends Component {
  state = {
  
  };
  
  componentDidMount() {
  
  }
  componentDidUpdate(prevProps) {
    if(this.props.isLoading)return
    const { name } = this.props.activeItem
    // console.log('card this.props', name);
    if (prevProps.activeItem != null){
      if ( prevProps.activeItem.name === name)return
    }
    

    this.setState({
      activeItem: name
    });
    // console.log('componentDidUpdate', name);
  }
  render() {
    if(!this.props.activeItem){
      return(
        <Spinner animation="border" variant="primary" size="lg" />
      )
    }
    const { name, sprites:{
            other:{
            dream_world:{
            front_default
          }
        }
      }
    } = this.props.activeItem;
    
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={front_default}/>
        <Card.Body>
          <Card.Title style = {{textTransform: 'capitalize'}}>{name}</Card.Title>
          
          <Button variant="primary">Показать больше</Button>
        </Card.Body>
      </Card>
    );
  }
}
