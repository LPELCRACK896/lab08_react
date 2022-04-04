import React, { Component } from 'react'
function updateState (record){
    this.setState({record})
}
class Record extends Component{
    constructor(props){
        super(props)
        this.state = {
         moves: 0
     }
     updateState = updateState.bind(this)
    }
    render(){
    return (
    <div>Record: {this.props.record}</div>
  )
    }
}


export default Record