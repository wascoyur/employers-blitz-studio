import React, { Component, Fragment } from 'react';
import { ListGroup, Button, Spinner } from 'react-bootstrap';
import getData from '../../services/swap-service';

export default class ItemList extends Component {
  
  async componentDidMount() {}
  renderItems(arr) {
    if (!arr) arr = this.state.itemList;
    return arr.map((item, index) => {
      return (
        <ListGroup.Item
          onClick={() => {
            this.props.getActive(item);
          }}
          className="flex-md-grow-1"
          action
          variant="secondary"
          key={index}
        >
          {item.name}
        </ListGroup.Item>
      );
    });
  }
  getItemListLastItem(){
    const index = this.props.itemList
    const lastItem = index[index.length - 1];
    let lastIndex = Number(lastItem.url.match(/(\d+)(?!.*\d)/g)[0]);
    return lastIndex
  }
  render() {
    if (this.props.itemList === null){
      return <Spinner/>
    }
    const { itemList } = this.props;
    const items = this.renderItems(itemList);
    return (
      <Fragment>
        <ListGroup className="flex-grow-1" variant="primary">
          <Button
          
          >Предыдущие</Button>
          {items}
          <Button
            onClick = {()=>{this.props.getNewList(5,this.getItemListLastItem())}}
          >Следующие 5</Button>
        </ListGroup>
      </Fragment>
    );
  }
}
