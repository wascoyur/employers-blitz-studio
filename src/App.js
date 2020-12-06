import React, { Fragment } from 'react';
import Header from './components/header/Header';
import ItemPage from './components/main-page/'
import BrowserRouter, {Route} from 'react-router-dom'


const App = () => {
  return( 
  <Fragment>
      <Header />
      
      <ItemPage/>
        
  </Fragment> 
  )
};

export default App;
 