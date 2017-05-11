import React, { Component } from 'react'

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
         { player.user_voted &&
           <button> voted </button>
         }
        </div>
      </li>
    )
  }
}

export default Player
