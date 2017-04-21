import React, { Component }       from 'react'
import { connect }                from 'react-redux'
import { editGuitar, toggleEdit } from '../actions/Guitar'

export class GuitarEditForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      id: this.props.params.id,
      name: this.refs.inputName.value.trim(),
      maker: this.refs.inputMaker.value.trim()
    }
    this.props.editGuitar(params)
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
              toggleEdit(id)
            }} /> 
          </td>
        </tr>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSending: state.Guitar.isFetching }
}

export default connect(mapStateToProps, { editGuitar, toggleEdit } )(GuitarEditForm)
