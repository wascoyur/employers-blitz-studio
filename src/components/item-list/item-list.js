import React, { Component, Fragment } from 'react';
import { ListGroup, Button, Spinner } from 'react-bootstrap';
import getData from '../../services/swap-service';

export default class ItemList extends Component {
  state={
    countItems:0
  }
  componentDidMount() {
    //if (this.props.itemList == null)return
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps === this.props)return
    // this.setState({
    //   countItems:this.getBoundaryIndex()
    // })
  }
  
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
  getBoundaryIndex = (reverse=false)=>{
    if (reverse){}
    const index = this.props.itemList
    let boundaryItem = 0;
    if(reverse){
     boundaryItem = this.props.itemList[0]
    }else{
      boundaryItem = this.props.itemList[index.length - 1];
    }
    let boundaryIndex = boundaryItem.url.match(/(\d+)(?!.*\d)/g)[0];

    return Number(boundaryIndex)
  }
  render() {
    const countList = 5
       let btnOff = () =>{
      const t = this.getBoundaryIndex(true) - countList;
      return t < 0 ? true : false
     }
    
    if (this.props.itemList === null){
      return <Spinner/>
    }
    const { itemList } = this.props;
    const items = this.renderItems(itemList);
    return (
      <Fragment>
        <ListGroup className="flex-grow-1" variant="primary">
          <Button
            disabled ={btnOff()}
            onClick = {()=>{
              this.props.getNewList(countList,this.getBoundaryIndex(true) -countList )
            }}
          >Предыдущие {countList}</Button>
          {items}
          <Button
            onClick = {()=>{this.props.getNewList(countList,this.getBoundaryIndex())}}
          >Следующие 5</Button>
        </ListGroup>
      </Fragment>
    );
  }
}
