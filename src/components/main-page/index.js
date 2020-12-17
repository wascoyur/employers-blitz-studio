import React, { Component, Fragment } from 'react';
import CardItem from '../card/CardItem';
import {getData, getPokeMain} from '../../services/swap-service';
import ItemList from '../item-list/item-list';
import { Container, Row, Col } from 'react-bootstrap';

export default class ItemPage extends Component {
  state = {
    itemList: null,
    activeItem: {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/'
    }
  };
  getActiveItem = (url) => {
    console.log('index-getActiveItem', url);
    
    this.setState({ activeItem: this.dowloadData(url.name) });
    //console.log('this.state.activeItem:', this.state.activeItem);
  };
  async componentDidMount() {
    const query = '?limit=10&offset=2';
    const getdata = await getData(`pokemon${query}`);

    this.setState({
      itemList: getdata.results
    });
  }
  async dowloadData(url = Math.floor(Math.random() * 10) ) {
    
    //url = url.match(/\/([0-9])*\/$/)
    //console.log('card-downloadData-url', url)
    const data = await getPokeMain(url);
    console.log('url', url);
    return await data;
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
                <CardItem activeItem={this.state.activeItem} />
              </Col>
            </Row>
          </Container>
      </Fragment>
    );
  }
}
