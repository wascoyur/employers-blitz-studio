import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { getPokeMain } from '../../services/swap-service';

export default class CardItem extends Component {
  state = {
    isLoaded: true,
    activeItem: {
      name: 'name',
      sprites: {
        back_female:
          'http://pokeapi.co/media/sprites/pokemon/back/female/12.png',
        back_shiny_female:
          'http://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png',
        back_default: 'http://pokeapi.co/media/sprites/pokemon/back/12.png',
        front_female: 'http://pokeapi.co/media/sprites/pokemon/female/12.png',
        front_shiny_female:
          'http://pokeapi.co/media/sprites/pokemon/shiny/female/12.png',
        back_shiny: 'http://pokeapi.co/media/sprites/pokemon/back/shiny/12.png',
        front_default: 'http://pokeapi.co/media/sprites/pokemon/12.png',
        front_shiny: 'http://pokeapi.co/media/sprites/pokemon/shiny/12.png'
      }
    }
  };
  async dowloadData(url = 'pokemon/2') {
    if (!this.props) return;
    //const name = 'name';
    //console.log('card-downloadData-url', url)
    const data = await getPokeMain(url);
    //console.log('card-downloadData', data);
    return await data;
  }
  async componentDidMount() {
    //console.log('card didMount this.props', this.props.activeItem);
    const rnd = Math.floor(Math.random() * 10);
//console.log(rnd);

    const tmp = await this.dowloadData(rnd);
    console.log('card didmount', tmp);
    this.setState({
      activeItem: tmp
    });
  }
  async componentDidUpdate(prevProps) {
    const { name } = this.props.activeItem
    console.log('card this.props', name);
    const getPoke = await this.dowloadData(name);
    if(getPoke.name === name) return

    this.setState({
      activeItem: name
    });
    console.log('componentDidUpdate', name);
  }
  render() {
    const {
      name,      
    } = this.state.activeItem;

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}
