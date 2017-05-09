import React, { Component } from 'react'
import GuitarEditForm       from './GuitarEditForm'

class Guitar extends Component {
  onEditHandler(e){
    e.preventDefault()
    this.props.onEdit(this.props.guitar.id)
  }

  onDeleteHandler(e){
    e.preventDefault()
    this.props.onDelete(this.props.guitar.id)
  }

  renderGuitar(guitar){
    return (
      guitar.isEdit ? 
        <GuitarEditForm
          guitar={ guitar }
          key={ guitar.id }
          onEdit={ this.props.onEdit }
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
        <ul>
          { this.props.players.map((player) => 
            <li key={player.id}>
              <div style={{display: 'inline-block', marginRight: 10}} >
                name: { player.name }
              </div>
              <div style={{display: 'inline-block', marginRight: 10}} >
                votes: { player.users_votes_count }
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Guitar
