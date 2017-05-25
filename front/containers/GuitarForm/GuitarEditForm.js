import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../../actions/Guitar'

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
    const { isFetching } = this.props
    return (
      <form onSubmit={ this.onSubmitHandler.bind(this) }>
        <ul>
          <li>
            <input type="text" ref="inputName" defaultValue={ name } disabled={ isFetching }/>
          </li>
          <li>
            <input type="text" ref="inputMaker" defaultValue={ maker } disabled={ isFetching }/>
          </li>
        </ul>
        <input type="submit" value="edit" disabled={ isFetching }/>
        <input type="button" value="cancel" onClick={ this.onCancelHandler.bind(this)} disabled={ isFetching } /> 
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    isFetching: state.Guitar.isFetching
  }
}

GuitarEditForm.propTypes ={
  isFetching: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, Actions)(GuitarEditForm)
