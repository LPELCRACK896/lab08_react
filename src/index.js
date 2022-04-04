import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Game from "./components/comp_game/Game"
import Menu from "./components/comp_menu/Menu"


ReactDOM.render(
    <>
    <Router>    
        <Routes>
            <Route path="/" element = {<Menu />}/>
            <Route path="/game" element = {<Game />}/>
        </Routes>    
    </Router>
    </>,
    document.getElementById("root"))