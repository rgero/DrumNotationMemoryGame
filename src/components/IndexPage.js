import React from 'react';

import CardDisplay from './CardDisplay';

// This should be stored as a state.
const CardDataContainer = require("../CardData/CardData.json");

const IndexPage = () => {
  return (
      <div className="App">
        <CardDisplay cardData={CardDataContainer}/>
      </div>
  )
}
export default IndexPage;
