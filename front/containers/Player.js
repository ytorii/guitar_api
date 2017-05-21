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
          <Vote voteId={player.vote_id} playerId={player.id} />
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    player: state.entities.Player.players[ownProps.entityId],
  }
}

export default connect(mapStateToProps, Actions)(Player)
