import React, { Component } from 'react'

class GuitarEditForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      id: this.props.params.id,
      name: this.refs.inputName.value.trim(),
      maker: this.refs.inputMaker.value.trim()
    }
    this.props.onClick(params)
  }

  render() {
    const { id, name, maker } = this.props.params
    return (
      <form onSubmit={ this.onSubmitHandler.bind(this) }>
        <tr>
          <td>
            <input type="text" ref="inputName" defaultValue={ name } />
          </td>
          <td>
            <input type="text" ref="inputMaker" defaultValue={ maker } />
          </td>
          <td>
            <input type="submit" value="edit" />
          </td>
          <td>
            <input type="button" value="cancel" onClick={ e => { 
              e.preventDefault()
              this.props.onCancel(id)
            }} /> 
          </td>
        </tr>
      </form>
    )
  }
}

export default GuitarEditForm
