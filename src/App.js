import React, {Component, Fragment} from 'react';
import Header from './components/header/Header';
import MainPage from './components/main-page/'
import BrowserRouter, {Route} from 'react-router-dom'


export default class App extends Component{
  
  render(){
    return(
      <Fragment>
        <Header />
      
        <MainPage/>
    
      </Fragment>
    )
  }
  
};

