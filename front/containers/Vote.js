import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/Vote'

class Vote extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      player_id: this.props.playerId 
    }
    this.props.addVote(params)
  }

  render(){
    const { voteId, isSending } = this.props
    return (
      <div>
        { !voteId &&
          <button onClick={ this.onSubmitHandler.bind(this) } disabled={ isSending }>
            vote!
          </button>
        }
        { voteId &&
          <div>voted</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    isSending: state.Guitar.isSending
  }
}

export default connect(mapStateToProps, Actions)(Vote)
