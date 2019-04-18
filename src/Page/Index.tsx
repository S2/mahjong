import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./Index.sass"

import Yama from "../Model/Yama"
import Player from "../Model/Player"

interface Props {
    
}

interface State {
    player1 
    player2 
    player3 
    player4 
    phase : Phases 
}

enum Phases{
    player1kiriban , 
    player2kiriban , 
    player3kiriban , 
    player4kiriban , 
}

class Index extends React.Component<Props , State> {
    constructor(props : Props){
        super(props)

        let yama = new Yama()
        
        this.state = {
            player1 : new Player("player1" , yama) , 
            player2 : new Player("player2" , yama) , 
            player3 : new Player("player3" , yama) , 
            player4 : new Player("player4" , yama) , 
            phase : Phases.player1kiriban
        }
    }

    render() {
        if(this.state.phase == Phases.player1kiriban){
            this.state.player1.tsumo()
        }
        if(this.state.phase == Phases.player2kiriban){
            this.state.player2.tsumo()
        }
        if(this.state.phase == Phases.player3kiriban){
            this.state.player3.tsumo()
        }
        if(this.state.phase == Phases.player4kiriban){
            this.state.player4.tsumo()
        }
        return <>
            <PlayerBlock player={this.state.player1} number={1} setToPhase={()=>{this.setState({phase : Phases.player2kiriban})}} />
            <PlayerBlock player={this.state.player2} number={2} setToPhase={()=>{this.setState({phase : Phases.player3kiriban})}} />
            <PlayerBlock player={this.state.player3} number={3} setToPhase={()=>{this.setState({phase : Phases.player4kiriban})}} />
            <PlayerBlock player={this.state.player4} number={4} setToPhase={()=>{this.setState({phase : Phases.player1kiriban})}} />
        </>
    }
}

interface PlayerProps {
    player
    number
    setToPhase
}

interface PlayerState {
}

class PlayerBlock extends React.Component<PlayerProps , PlayerState> {
    constructor(props : PlayerProps){
        super(props)
        this.state = {
        }
        this.throw = this.throw.bind(this)
    }

    throw(pi){
        this.props.player.throw(pi)
        this.props.setToPhase()
    }

    render() {
        return <div className={`player player${this.props.number}`}>
            {this.props.player.getTehai().sort((arg1 , arg2 ) => arg1.getName() > arg2.getName()).map((pi , i ) => {
                return <img onClick={()=>{this.throw(pi)}} key={i} src={pi.getImage()} />
            })}
        </div>
    }
}

ReactDom.render(<Index />, document.getElementById("content"));
