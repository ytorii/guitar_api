import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/Guitar'
import GuitarModel          from '../models/Guitar'

import GuitarComponent      from '../components/GuitarComponent'
import GuitarEditForm       from './GuitarEditForm'
import Player               from './Player'
import PlayerAddForm        from './PlayerAddForm'

class Guitar extends Component {
  render(){
    const { guitar, isEdit, players } = this.props
    return (
      <div>
        <h3>Guitar Data</h3>
        { isEdit ? 
          <GuitarEditForm guitar={ guitar } />
          :
          <GuitarComponent {...this.props} />
        }
        <p>Add Player </p>
        <PlayerAddForm guitarId={guitar.id} />
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
  const { entityId, isEdit } = state.Guitar.guitar
  return { 
    guitar: state.entities.Guitar.guitars[entityId],
    players: state.entities.GuitarPlayer.guitarPlayers[entityId],
    isEdit: isEdit
  }
}

Guitar.propTypes ={
  guitar: React.PropTypes.instanceOf(GuitarModel).isRequired,
  players: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  isEdit: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, Actions)(Guitar)
