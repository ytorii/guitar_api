import React, { Component }       from 'react'
import { connect }                from 'react-redux'
import { signUpUser, signInUser } from '../actions/User'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

export class UserForms extends Component {
  render() {
    return (
      <div>
        <SignUpForm isSending={this.props.isSending} onSubmit={ this.props.signUpUser }/>
        <SignInForm isSending={this.props.isSending} onSubmit={ this.props.signInUser }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSending: state.User.isSending }
}

export default connect(mapStateToProps, { signUpUser, signInUser } )(UserForms)
