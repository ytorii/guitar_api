import React, { Component } from 'react'

export default class SignOutForm extends Component {
  onClickHandler(e) {
    e.preventDefault()
    this.props.signOutUser()
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler.bind(this)} disabled={this.props.isSending} >
          Sign Out
        </button>
      </div>
    )
  }
}
