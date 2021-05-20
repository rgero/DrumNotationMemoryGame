import React from 'react';
import '../styles/CardDisplay.css';
import Scoreboard from './Scoreboard';


class CardDisplay extends React.Component{

  constructor(props)
  {
    super(props);

    this.imageSize = props.cardData.imageSize;
    this.maxCards = props.cardData.cards.length;

    this.getPathToFile = this.getPathToFile.bind(this);
    this.getNextCard = this.getNextCard.bind(this);
    this.toggleNameDisplay = this.toggleNameDisplay.bind(this);

    this.state = {
      selectedCard: null,
      showName: false
    }

    this.getNextCard();
  }

  getPathToFile(inputCard)
  {
    let imageName = inputCard.image;
    return process.env.PUBLIC_URL + "/images/cards/" + imageName
  }

  getNextCard()
  {
    let selectedCard = this.props.cardData.cards[Math.floor(Math.random()*this.maxCards)];    
    this.setState(
      {
        selectedCard: selectedCard,
        showName: false
      }
    )
  }

  toggleNameDisplay(){
    this.setState({
      showName: !this.state.showName
    })
  }

  render()
  {
    return (
      <div className="CardDisplay">
            {this.state.selectedCard && (
                  <div>
                  <div className="cardImage">
                    <img src={this.getPathToFile(this.state.selectedCard)} width={this.imageSize.width} width={this.imageSize.height} />
                  </div>
                  <div className={this.state.showName ? "cardName" : "cardName_hidden"}>
                    {this.state.selectedCard.cardName}
                  </div>
                  <div>
                    <Scoreboard selectNextCard={this.getNextCard}/>
                  </div>
                  <div onClick={this.toggleNameDisplay} className="toggleButton">
                    {this.state.showName ? <div>Hide Name</div> : <div>Show Name</div>}
                  </div>
                </div>
              )
            }
            {!this.state.selectedCard && (
              <div onClick={this.getNextCard} className="startButton">
                <div>Start Game</div>
              </div>
            )}

    </div>
    );
  }

}

export default CardDisplay;
