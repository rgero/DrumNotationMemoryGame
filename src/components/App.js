import React from 'react';

import Header from './Header'
import CardDisplay from './CardDisplay';


const CardDataContainer = require("../CardData/CardData.json");

const App = () => {
  return (
      <div className="App">
        <Header/>
        <CardDisplay cardData={CardDataContainer}/>
      </div>
  )
}
export default App;
