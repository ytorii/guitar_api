import React, { Component } from 'react'

export default class SignUpForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      email: this.refs.inputEmail.value.trim(),
      name: this.refs.inputName.value.trim(),
      nickname: this.refs.inputNickname.value.trim(),
      password: this.refs.inputPassword.value.trim(),
      password_confirmation: this.refs.inputPasswordConfirmation.value.trim()
    }
    this.props.signUpUser(params)
  }

  render() {
    return (
      <div style={{marginBottom:  10}}>
        <p>Please join us!</p>
        <form onSubmit={ this.onSubmitHandler.bind(this) }>
          <div>
            <label>
              Email:
              <input type="text" ref="inputEmail" />
            </label>
          </div>
          <div>
            <label>
              Name:
              <input type="text" ref="inputName" />
            </label>
          </div>
          <div>
            <label>
              Nickname:
              <input type="text" ref="inputNickname" />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" ref="inputPassword" />
            </label>
            <br />
            <label>
              Retype password:
              <input type="password" ref="inputPasswordConfirmation" />
            </label>
          </div>
          <div>
            <input type="submit" value="Sign Up" disabled={this.props.isSending} />
          </div>
        </form>
      </div>
    )
  }
}
