import React, { Component } from 'react'
import GuitarModel          from '../models/Guitar'

class GuitarComponent extends Component {
  onDeleteHandler(e){
    e.preventDefault()
    this.props.deleteGuitar(this.props.guitar.id)
  }

  render(){
    const { guitar } = this.props
    return (
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
}

export default GuitarComponent
