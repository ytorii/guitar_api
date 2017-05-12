import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/Guitar'
import GuitarEditForm       from '../components/GuitarEditForm'
import Player               from '../components/Player'

class Guitar extends Component {
  onDeleteHandler(e){
    e.preventDefault()
    this.props.deleteGuitar(this.props.guitar.id)
  }

  renderGuitar(guitar){
    return (
      guitar.isEdit ? 
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
    return (
      <div>
        <h3>Guitar Data</h3>
        { this.renderGuitar(this.props.guitar) }
        <p>Players of this Guitar</p>
        { this.props.guitar.players &&
          <ul>
            { this.props.guitar.players.map((player) => 
              <Player key={ player.id } player={ player } />
            )}
          </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { guitar: state.Guitar.guitar }
}

export default connect(mapStateToProps, Actions)(Guitar)
