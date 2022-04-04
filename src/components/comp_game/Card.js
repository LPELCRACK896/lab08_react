import React, { Component } from 'react'
import "./styles/game_style.css"
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

export default class Card extends Component {
  render() {
    return (
      <div className='card' onClick={()=>console.log("hola")}>
        <img src={BackImage} alt="Chica Image" />
      </div>
      
    )
  }
}
