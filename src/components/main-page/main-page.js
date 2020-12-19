import React, { Component, Fragment } from 'react';
import CardItem from '../card/CardItem';
import {getData, getPokeMain} from '../../services/swap-service';
import ItemList from '../item-list/item-list';
import { Container, Row, Col } from 'react-bootstrap';

export default class MainPage extends Component {
  state = {
    isLoading: true,
    itemList: null,
    activeItem: {
      "name": "ditto",
      "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
        "front_shiny_female": null,
        "other": {
          "dream_world": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
            "front_female": null
          },
          "official-artwork": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
          }
        },
      }
    }
  };
  async dowloadData(urlOrId) {
    
    if (typeof(urlOrId) === 'undefined'){
      urlOrId = Math.floor(Math.random() * 10);
    }
    //OrId = OrId.match(/\/([0-9])*\/$/)
    //console.log('card-downloadData-OrId', OrId)
    const data = await getPokeMain(urlOrId);
    console.log('OrId', urlOrId);
    return await data;
  }
  getActiveItem = (url) => {
    this.setState({isLoading: true})
    //console.log('index-getActiveItem', url);
    this.dowloadData(url.name)
      .then((response) =>{
        this.setState({
          activeItem: response,
          isLoading: false,
        })
      })
    ;
    //console.log('this.state.activeItem:', this.state.activeItem);
  };
  async componentDidMount() {
    const query = '?limit=10&offset=22';
    const getdata = await getData(`${query}`);

    this.setState({
      itemList: getdata.results,
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState === this.state) return
    
  }
  
  render() {
    return (
      <Fragment>
          <Container>
            <Row>
              <Col>
                <ItemList
                  getActive={this.getActiveItem}
                  itemList={this.state.itemList}
                />
              </Col>
              <Col>
                <CardItem activeItem={this.state.activeItem} iaLoading={this.state.isLoading} />
              </Col>
            </Row>
          </Container>
      </Fragment>
    );
  }
}
