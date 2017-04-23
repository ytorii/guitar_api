import React, { Component } from 'react'

export default class SignOutForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    this.props.onClick()
  }

  render() {
    return (
      <div>
        <button onClick={ this.onClickHandler.bind(this) }>
          Sign Out
        </button>
      </div>
    )
  }
}
