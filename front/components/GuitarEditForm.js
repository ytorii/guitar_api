import React, { Component } from 'react'

class GuitarEditForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      id: this.props.guitar.id,
      name: this.refs.inputName.value.trim(),
      maker: this.refs.inputMaker.value.trim()
    }
    this.props.onEdit(params)
  }

  render() {
    const { id, name, maker } = this.props.guitar
    return (
      <form onSubmit={ this.onSubmitHandler.bind(this) }>
        <ul>
          <li>
            <input type="text" ref="inputName" defaultValue={ name } />
          </li>
          <li>
            <input type="text" ref="inputMaker" defaultValue={ maker } />
          </li>
        </ul>
        <input type="submit" value="edit" />
        <input type="button" value="cancel" onClick={ e => { 
          e.preventDefault()
          this.props.onCancel(id)
        }} /> 
      </form>
    )
  }
}

export default GuitarEditForm
