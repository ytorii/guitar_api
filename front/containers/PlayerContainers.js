import React, { Component } from 'react'
import { connect }          from 'react-redux'
import Player               from './Player/Player'
import PlayerAddForm        from './PlayerForm/PlayerAddForm'

class PlayerContainers extends Component {
  render(){
    const { players } = this.props
    return (
      <div>
        <p>Add Player </p>
        <PlayerAddForm guitarId={this.props.guitarId} />
        <p>Players of this Guitar</p>
        { players &&
          <ul>
            { players.map((id) => 
              <Player key={ id } entityId={ id } />
            )}
          </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const guitarId = state.Guitar.guitar
  return { 
    guitarId: guitarId,
    players: state.entities.GuitarPlayer.guitarPlayers[guitarId]
  }
}

PlayerContainers.propTypes ={
  players: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
}

export default connect(mapStateToProps)(PlayerContainers)
