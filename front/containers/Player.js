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
          <Vote voted={player.user_voted} player_id={this.props.player.id} />
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    isSending: state.Guitar.isSending,
    guitar: state.Guitar.guitar
  }
}

export default connect(mapStateToProps, Actions)(Player)
