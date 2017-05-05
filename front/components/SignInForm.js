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
        <p>Please sign in!</p>
        <form onSubmit={ this.onSubmitHandler.bind(this) }>
          <div>
            <label>
              Email:
              <input type="text" ref="inputEmail" />
            </label>
            <label>
              Password:
              <input type="password" ref="inputPassword" />
            </label>
          </div>
          <div>
            <input type="submit" value="Sign In" disabled={this.props.isSending} />
          </div>
        </form>
      </div>
    )
  }
}
