import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/User'
import SignUpForm           from '../components/SignUpForm'
import SignInForm           from '../components/SignInForm'
import SignOutForm          from '../components/SignOutForm'

export class UserForms extends Component {
  componentDidMount(){
    this.props.checkSigninUser()
  }

  render() {
    return (
      <div>
        { !this.props.isSignedIn &&
          <div>
            <SignUpForm isSending={ this.props.isSending } onSubmit={ this.props.signUpUser }/>
            <SignInForm isSending={ this.props.isSending } onSubmit={ this.props.signInUser }/>
          </div>
        }
        { this.props.isSignedIn &&
          <div>
            <SignOutForm onClick={ this.props.signOutUser }/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    isSending: state.User.isSending, 
    isSignedIn: state.User.isSignedIn 
  }
}

export default connect(mapStateToProps, Actions)(UserForms)
