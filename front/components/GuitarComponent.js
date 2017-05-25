import React, { Component } from 'react'
import GuitarModel          from '../models/Guitar'

class GuitarComponent extends Component {
  onDeleteHandler(e){
    e.preventDefault()
    this.props.deleteGuitar(this.props.guitar.id)
  }

  onToggleEdit(e){
    e.preventDefault()
    this.props.toggleProp('isEdit')
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
        <button onClick={this.onToggleEdit.bind(this)}>
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
