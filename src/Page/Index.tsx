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
        }
    }
    
    render() {
        return <>
            <PlayerBlock player={this.state.player1} number={1} />
            <PlayerBlock player={this.state.player2} number={2} />
            <PlayerBlock player={this.state.player3} number={3} />
            <PlayerBlock player={this.state.player4} number={4} />
        </>
    }
}

interface PlayerProps {
    player
    number
}

interface PlayerState {
}

class PlayerBlock extends React.Component<PlayerProps , PlayerState> {
    constructor(props : PlayerProps){
        super(props)
        this.state = {
        }
    }
    
    render() {
        return <div className={`player player${this.props.number}`}>
            {this.props.player.getTehai().sort((arg1 , arg2 ) => arg1.getName() > arg2.getName()).map((pi , i ) => {
                return <img key={i} src={pi.getImage()} />
            })}
        </div>
    }
}

ReactDom.render(<Index />, document.getElementById("content"));
