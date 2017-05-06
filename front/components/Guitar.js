import React, { Component } from 'react'
import GuitarEditForm       from './GuitarEditForm'

class Guitar extends Component {
  onEditHandler(e){
    e.preventDefault()
    this.props.onEdit(this.props.params.id)
  }

  onDeleteHandler(e){
    e.preventDefault()
    this.props.onDelete(this.props.params.id)
  }

  renderGuitar(guitar){
    return (
      guitar.isEdit ? 
        <GuitarEditForm
          params={ guitar }
          key={ guitar.id }
          onEdit={ this.props.onEdit }
          onCancel={ this.props.toggleEdit }
        />
        :
        <div>
          <ul>
            <li>
              {this.props.params.name}
            </li>
            <li>
              {this.props.params.maker}
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
        { this.renderGuitar(this.props.params) }
        <p>Players of this Guitar</p>
        <ul>
          { this.props.params.players.map((player) => 
            <li key={player.id}>{ player.name }</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Guitar
