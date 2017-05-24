import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/Guitar'

class GuitarEditForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      id: this.props.guitar.id,
      name: this.refs.inputName.value.trim(),
      maker: this.refs.inputMaker.value.trim()
    }
    this.props.editGuitar(params)
  }

  onCancelHandler(e) {
    e.preventDefault()
    this.props.toggleEdit(this.props.guitar.id)
  }

  render() {
    const { id, name, maker } = this.props.guitar
    const { isSending } = this.props
    return (
      <form onSubmit={ this.onSubmitHandler.bind(this) }>
        <ul>
          <li>
            <input type="text" ref="inputName" defaultValue={ name } disabled={ isSending }/>
          </li>
          <li>
            <input type="text" ref="inputMaker" defaultValue={ maker } disabled={ isSending }/>
          </li>
        </ul>
        <input type="submit" value="edit" disabled={ isSending }/>
        <input type="button" value="cancel" onClick={ this.onCancelHandler.bind(this)} disabled={ isSending } /> 
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    isSending: state.Guitar.isSending
  }
}

GuitarEditForm.propTypes ={
  isSending: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, Actions)(GuitarEditForm)
