import React, { Component, Fragment} from 'react';
import DetailPage from './detail-page';
import CardItem from './pokemon-card';
import getData from '../../services/swap-service'
import ItemList from './item-list';


export default class ItemPage extends Component{
  state = {
    itemList: null
  }  
  componentDidMount(){
    
  }
  data = getData('pokemon/12')
  
  render(){
    return(
      <Fragment>
        <ItemList/>
        <CardItem/>
        <DetailPage/>
      </Fragment>
    )
  }
}