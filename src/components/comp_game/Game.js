import React, { Component } from 'react'
import "./styles/game_style.css"
import Card from './Card'
import logo from './assets/memory_game_pixel.png'
import { Link } from 'react-router-dom'
import random_memory_setup from './random_game_setup'
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

const cards_info = require ('./cards_info')

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      moves: 0,
      record: 0,
      setup: random_memory_setup(),
      oldPoints: 0,
      points: 0,
      id_first_card_flipped: 0,
      id_second_card_flipped: 0, 
    }
} 
  render() {
    console.log(this.state.setup)
    return (
      <>
      <header>
        <Link to="/">
          <img src= {logo} id="logo"></img>
        </Link>

          <div className='div-text' id="moves-div">
            <div>Movimientos: {this.state.moves}
            </div>
          </div>
          <div className='div-text' id="record-div">
            <div>
              Puntos: 0/6 
            </div>
          </div>          
      </header>
      <div id="game-grid">
        {this.state.setup.map(id =>{
          return <div key={id} className="card-container"  onClick={()=>this.setState({moves: this.state.moves + 1})}><Card cardid={id}/></div>
        })}

      </div>
      </>
    )
  }
}

export default Game