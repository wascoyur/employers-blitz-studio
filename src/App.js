import React from 'react';
import swapData from './services/swap-service';

(async () => {
  let out = swapData(`pokemon/`);
  console.log('App:', out);
})();

const App = () => {
  return <div>App</div>;
};

export default App;
