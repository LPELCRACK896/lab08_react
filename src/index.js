import React from "react"
import {createRoot} from "react-dom/client"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Game from "./components/comp_game/Game"
import Menu from "./components/comp_menu/Menu"
const container = document.getElementById('root')
const root = createRoot(container)
const App = () =>{
    return <div>
    <Router>    
        <Routes>
            <Route path="/" element = {<Menu />}/>
            <Route path="/game" element = {<Game />}/>
        </Routes>    
    </Router>
    </div>;
}
root.render(<App/>)