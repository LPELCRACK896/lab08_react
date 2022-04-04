import React, { Component } from 'react'
import "./styles/game_style.css"
import ReactCardFlip from 'react-card-flip';
import CaptainFalconImage from '../card_visuals/cFalcon.png'
import FoxImage from '../card_visuals/fox.png'
import DevilImage from '../card_visuals/devil.png'
import CupheadYMugmanImage from '../card_visuals/cupheadMugman.png'
import EndermanImage from '../card_visuals/enderman.png'
import SteveImage from '../card_visuals/steve.png'
import FreddyImage from '../card_visuals/freddy.png'
import ChicaImage from '../card_visuals/chica.png'
import JettImage from '../card_visuals/jett.png'
import KillJoyImage from '../card_visuals/kj.png'
import NuezImage from '../card_visuals/nuez.png'
import PatapumImage from '../card_visuals/patapum.png'
import SansImage from '../card_visuals/sans.png'
import PapyrusImage from '../card_visuals/papyrus.png'
import QuanChiImage from '../card_visuals/quanChi.png'
import ScorpionImage from '../card_visuals/scorpion.png'
import BackImage from '../card_visuals/0_backSide_Card.png'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
      this.state = {
      isFlipped: false,
      solved: false
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.renderFrontImageCard = this.renderFrontImageCard.bind(this);

  }

  clickHandler($event) {
    $event.preventDefault();
    console.log("Vuelta")
    this.state.isFlipped = !this.state.isFlipped     

  }
  renderFrontImageCard(){
    switch(this.props.cardid) {
      case 1:
        return <img src={CaptainFalconImage} alt="Chica Image" />
      case 2:
        return <img src={FoxImage} alt="Fox image" />
      case 3:
        return <img src={DevilImage} alt="Devil"/>
      case 4:
        return <img src={CupheadYMugmanImage} alt="Cup Head"/>
      case 5:
        return <img src={EndermanImage} alt="Enderman"/> 
      case 6:
        return <img src={SteveImage} alt="Steve" />
      case 7:
        return <img src={FreddyImage} alt="Freddy" />
      case 8:
        return <img src={ChicaImage} alt="Chica"/>
      case 9:
        return <img src={JettImage} alt="Jett"/>
      case 10:
          return <img src={KillJoyImage} alt="Killjoy"/>
      case 11:
        return <img src={NuezImage} alt="Nuez" />
      case 12:
        return <img src={PatapumImage} alt="Patapum" />
      case 13:
        return <img src={SansImage} alt="Sans"/>
      case 14:
        return <img src={PapyrusImage} alt="Papyrus"/>
      case 15:
        return <img src={QuanChiImage} alt="Quan Chi"/>
      case 16:
        return <img src={ScorpionImage} alt="Scorpion"/>
      default:
        return   <img src={BackImage} alt="BacksideCardImage" />
  }
  }
  
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} className='card'  flipDirection='horizontal'>
        <div className='card' onClick={this.clickHandler}>

          <img src={BackImage} alt="BacksideCardImage" />
        </div>
        <div className='card' onClick={this.clickHandler}>
        {this.renderFrontImageCard()}
        </div>
      </ReactCardFlip >
      
    )
  }
}
