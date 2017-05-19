import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/Player'
import Vote                 from './Vote'

class Player extends Component {
  render(){
    const player = this.props.player
    return (
      <li>
        <div style={{display: 'inline-block', marginRight: 10}} >
          name: { player.name }
        </div>
        <div style={{display: 'inline-block', marginRight: 10}} >
          votes: { player.votes_count }
        </div>
        <div style={{display: 'inline-block', marginRight: 10}} >
          <Vote userVoted={player.user_voted} playerId={player.id} />
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    isSending: state.Guitar.isSending,
    player: state.entities.Player.players[ownProps.entityId],
  }
}

export default connect(mapStateToProps, Actions)(Player)
