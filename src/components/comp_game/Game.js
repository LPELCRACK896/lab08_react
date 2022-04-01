import React, { Component } from 'react'
import "./styles/game_style.css"
import Card from './Card'
import logo from './assets/memory_game_pixel.png'
import { Link } from 'react-router-dom'
class Game extends Component {
  
  render() {

    return (
      <>
      <header>
        <Link to="/">
          <img src= {logo} id="logo"></img>
        </Link>

          <div className='div-text' id="moves-div">
            Movimientos: 0
          </div>
          <div className='div-text' id="record-div">
            Record: 0
          </div>          

  
      </header>
      <div id="game-grid">
        <Card id="1"/>
        <Card id="2"/>
        <Card />

        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />

      </div>
      </>
    )
  }
}

export default Game