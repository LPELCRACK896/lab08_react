import React, { Component } from 'react'
import useState from 'react-hook-use-state';

class Moves extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                moves: 0
            };
        this.resetMoves = this.resetMoves.bind(this)
        this.increaseMoves = this.increaseMoves.bind(this)
    }
    resetMoves = () =>{
        this.state.moves = 0  
    }
    increaseMoves = () =>{
        this.state.moves += 1   
    }
        render(){
        return (  
         <>
         </>
            
        )}
    
}


export default Moves