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
    const { userVoted, isSending } = this.props
    return (
      <div>
        { !userVoted &&
          <button onClick={ this.onSubmitHandler.bind(this) } disabled={ isSending }>
            vote!
          </button>
        }
        { userVoted &&
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
