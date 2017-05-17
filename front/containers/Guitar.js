import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/Guitar'
import GuitarEditForm       from '../components/GuitarEditForm'
import Player               from './Player'
import PlayerAddForm        from './PlayerAddForm'

class Guitar extends Component {
  onDeleteHandler(e){
    e.preventDefault()
    this.props.deleteGuitar(this.props.guitar.id)
  }

  renderGuitar(guitar, isEdit){
    return (
      isEdit ? 
        <GuitarEditForm
          guitar={ guitar }
          key={ guitar.id }
          onEdit={ this.props.editGuitar }
          onCancel={ this.props.toggleEdit }
        />
        :
        <div>
          <ul>
            <li>
              {guitar.name}
            </li>
            <li>
              {guitar.maker}
            </li>
          </ul>
          <button onClick={this.props.toggleEdit}>
            edit
          </button>
          <button onClick={this.onDeleteHandler.bind(this)}>
            delete
          </button>
        </div>
    )
  }

  render(){
    const { guitar, isEdit, players } = this.props
    return (
      <div>
        <h3>Guitar Data</h3>
        { this.renderGuitar(guitar, isEdit) }
        <p>Add Player </p>
        <PlayerAddForm guitarId={guitar.id} />
        <p>Players of this Guitar</p>
        { guitar.players &&
          <ul>
            { guitar.players.map((id) => 
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
    isEdit: isEdit,
  }
}

export default connect(mapStateToProps, Actions)(Guitar)
