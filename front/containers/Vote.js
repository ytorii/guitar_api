import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/Vote'

class Vote extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      player_id: this.props.player_id 
    }
    this.props.addVote(params)
  }

  render(){
    const player = this.props.players.find( p => p.id === this.props.player_id )
    return (
      <div>
        { !player.user_voted &&
          <button onClick={ this.onSubmitHandler.bind(this) } disabled={ this.props.isSending}>
            vote!
          </button>
        }
        { player.user_voted &&
          <div>voted</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    players: state.Guitar.guitar.players,
    isSending: state.Guitar.isSending
  }
}

export default connect(mapStateToProps, Actions)(Vote)
