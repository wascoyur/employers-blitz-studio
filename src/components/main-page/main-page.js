import React, { Component, Fragment } from 'react';
import CardItem from '../card/CardItem';
import {getData, getPokeMain} from '../../services/swap-service';
import ItemList from '../item-list/item-list';
import { Container, Row, Col } from 'react-bootstrap';
import './main-page.css'

export default class MainPage extends Component {
  state = {
    isLoading: true,
    itemList: null,
    activeItem:null
  };
  async dowloadData(urlOrId) {
    
    if (typeof(urlOrId) === 'undefined'){
      urlOrId = Math.floor(Math.random() * 10);
    }
    //OrId = OrId.match(/\/([0-9])*\/$/)
    //console.log('card-downloadData-OrId', OrId)
    const data = await getPokeMain(urlOrId);
    // console.log('OrId', urlOrId);
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
   getListOfPersons = async(limit = 10, offset)=>{
    if (offset < 0) offset = 0;
    const query = `?limit=${limit}&offset=${offset}`;
    await getData(`${query}`)
      .then((resp) =>{
        // console.log(resp.results)
        this.setState({
          itemList: resp.results
        })
      })
  }
  componentDidMount() {
    this.getListOfPersons();
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
                  getNewList = {this.getListOfPersons}
                />
              </Col>
              <Col>
                <CardItem activeItem={this.state.activeItem} isLoading={this.state.isLoading} />
              </Col>
            </Row>
          </Container>
      </Fragment>
    );
  }
}
