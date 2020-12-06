import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import getData from '../../services/swap-service';

export default class ItemList extends Component {
  state = {
    itemList: [{ name: 'unown', url: 'https://pokeapi.co/api/v2/pokemon/201/' }]
  };
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
  render() {
    const { itemList } = this.props;
    const items = this.renderItems(itemList);
    return (
      <ListGroup className="flex-grow-1" variant="primary">
        {items}
      </ListGroup>
    );
  }
}
