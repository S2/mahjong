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
    throwedPi

    player1ponable
    player2ponable
    player3ponable
    player4ponable
}

enum Phases{
    player1kiriban , 
    player2kiriban , 
    player3kiriban , 
    player4kiriban , 
    player1tsumoban , 
    player2tsumoban , 
    player3tsumoban , 
    player4tsumoban , 
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
            phase : Phases.player1kiriban , 
            throwedPi : null , 
            player1ponable : null , 
            player2ponable : null , 
            player3ponable : null , 
            player4ponable : null , 
        }
        this.claimJadgement = this.claimJadgement.bind(this)
        this.claimFinishJadgement = this.claimFinishJadgement.bind(this)
    }

    claimJadgement(){
        if(
            this.state.phase == Phases.player1tsumoban || 
            this.state.phase == Phases.player2tsumoban || 
            this.state.phase == Phases.player3tsumoban || 
            this.state.phase == Phases.player4tsumoban){
            let ponOrChe = false
            if(
                this.state.player1.ponable(this.state.throwedPi) || 
                this.state.player2.ponable(this.state.throwedPi) || 
                this.state.player3.ponable(this.state.throwedPi) || 
                this.state.player4.ponable(this.state.throwedPi) 
            ){
                this.setState({
                    player1ponable : this.state.player1.ponable(this.state.throwedPi) , 
                    player2ponable : this.state.player2.ponable(this.state.throwedPi) , 
                    player3ponable : this.state.player3.ponable(this.state.throwedPi) , 
                    player4ponable : this.state.player4.ponable(this.state.throwedPi) , 
                })
                ponOrChe = true 
            }
            if(!ponOrChe){
                if(this.state.phase == Phases.player1tsumoban){
                    this.setState({phase : Phases.player1kiriban})
                }
                if(this.state.phase == Phases.player2tsumoban){ 
                    this.setState({phase : Phases.player2kiriban})
                }
                if(this.state.phase == Phases.player3tsumoban){ 
                    this.setState({phase : Phases.player3kiriban})
                }
                if(this.state.phase == Phases.player4tsumoban){
                    this.setState({phase : Phases.player4kiriban})
                }
            }
        }
    }

    claimFinishJadgement(){
        if(
            this.state.player1ponable || 
            this.state.player2ponable || 
            this.state.player3ponable || 
            this.state.player4ponable 
        ){
            return
        }

        if(this.state.phase == Phases.player1tsumoban){
            this.setState({phase : Phases.player1kiriban})
        }
        if(this.state.phase == Phases.player2tsumoban){ 
            this.setState({phase : Phases.player2kiriban})
        }
        if(this.state.phase == Phases.player3tsumoban){ 
            this.setState({phase : Phases.player3kiriban})
        }
        if(this.state.phase == Phases.player4tsumoban){
            this.setState({phase : Phases.player4kiriban})
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
            <PlayerBlock player={this.state.player1} number={1} ponable={this.state.player1ponable} cancelPonable={()=>{this.setState({player1ponable : false} , this.claimFinishJadgement)}} isKiriban={this.state.phase == Phases.player1kiriban} setThrowedPi={(throwedPi)=>{this.setState({throwedPi})}}setToPhase={()=>{this.setState({phase : Phases.player2tsumoban} , this.claimJadgement)}} />
            <PlayerBlock player={this.state.player2} number={2} ponable={this.state.player2ponable} cancelPonable={()=>{this.setState({player2ponable : false} , this.claimFinishJadgement)}} isKiriban={this.state.phase == Phases.player2kiriban} setThrowedPi={(throwedPi)=>{this.setState({throwedPi})}}setToPhase={()=>{this.setState({phase : Phases.player3tsumoban} , this.claimJadgement)}} />
            <PlayerBlock player={this.state.player3} number={3} ponable={this.state.player3ponable} cancelPonable={()=>{this.setState({player3ponable : false} , this.claimFinishJadgement)}} isKiriban={this.state.phase == Phases.player3kiriban} setThrowedPi={(throwedPi)=>{this.setState({throwedPi})}}setToPhase={()=>{this.setState({phase : Phases.player4tsumoban} , this.claimJadgement)}} />
            <PlayerBlock player={this.state.player4} number={4} ponable={this.state.player4ponable} cancelPonable={()=>{this.setState({player4ponable : false} , this.claimFinishJadgement)}} isKiriban={this.state.phase == Phases.player4kiriban} setThrowedPi={(throwedPi)=>{this.setState({throwedPi})}}setToPhase={()=>{this.setState({phase : Phases.player1tsumoban} , this.claimJadgement)}} />
        </>
    }
}

interface PlayerProps {
    player
    number
    setToPhase
    isKiriban
    setThrowedPi
    ponable
    cancelPonable
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
        if(!this.props.isKiriban){
            return
        }
        this.props.player.throw(pi)
        this.props.setThrowedPi(pi)
        this.props.setToPhase()
    }

    render() {
        return <>
            <div className={`kawa kawa${this.props.number}`}>
                {this.props.player.getKawa().map((pi , i ) => {
                    return <img onClick={()=>{this.throw(pi)}} key={i} src={pi.getImage()} />
                })}
            </div>

            <div className={`tehai tehai${this.props.number}`}>
                {this.props.player.getTehai().sort((arg1 , arg2 ) => arg1.getName() > arg2.getName()).map((pi , i ) => {
                    return <img onClick={()=>{this.throw(pi)}} key={i} src={pi.getImage()} />
                })}
            </div>
            
            {(()=>{
                if(this.props.ponable){
                    return <>
                        <button onClick={this.props.cancelPonable} className={`pon pon${this.props.number}`}>ポンする</button>
                        <button onClick={this.props.cancelPonable} className={`pon pon${this.props.number}`}>キャンセルする</button>
                    </>
                }
            })()}
        </>
    }
}

ReactDom.render(<Index />, document.getElementById("content"));
