import React, { Component } from 'react'

export default class SignInForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      email: this.refs.inputEmail.value.trim(),
      password: this.refs.inputPassword.value.trim()
    }
    this.props.signInUser(params)
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmitHandler.bind(this) }>
          <label style={{marginRight: 10 }}>
            Email:
            <input type="text" ref="inputEmail" />
          </label>
          <label style={{marginRight: 10 }}>
            Password:
            <input type="password" ref="inputPassword" />
          </label>
          <input type="submit" value="Sign In" disabled={this.props.isSending} />
        </form>
      </div>
    )
  }
}
