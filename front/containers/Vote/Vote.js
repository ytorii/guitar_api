import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../../actions/Vote'

class Vote extends Component {
  onVoteHandler(e) {
    e.preventDefault()
    const params = {
      player_id: this.props.playerId 
    }
    this.props.addVote(params)
  }

  onCancelHandler(e) {
    e.preventDefault()
    const params = {
      player_id: this.props.playerId,
      id: this.props.voteId 
    }
    this.props.deleteVote(params)
  }

  render(){
    const { voteId, isSending } = this.props
    return (
      <div>
        { !voteId &&
          <button onClick={ this.onVoteHandler.bind(this) } disabled={ isSending }>
            vote!
          </button>
        }
        { voteId &&
          <button onClick={ this.onCancelHandler.bind(this) } disabled={ isSending }>
            cancel vote
          </button>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    isSending: state.Player.isSending
  }
}

export default connect(mapStateToProps, Actions)(Vote)
