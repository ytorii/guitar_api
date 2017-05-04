import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/User'
import SignUpForm           from '../components/SignUpForm'
import SignInForm           from '../components/SignInForm'
import SignOutForm          from '../components/SignOutForm'
import Modal                from './Modal'

export class UserForms extends Component {
  render() {
    return (
      <div>
        { !this.props.isSignedIn && !this.props.isSending &&
          <div>
            <div>
              <SignInForm isSending={ this.props.isSending } onSubmit={ this.props.signInUser }/>
            </div>
            <br />
            <div>
              <button onClick={ e => {
                e.preventDefault()
                this.props.toggleUserModal()
              }}>
                Sign Up Now!
              </button>
              <Modal isOpen={this.props.isModalOpen} onClose={this.props.toggleUserModal}>
                <SignUpForm isSending={ this.props.isSending } onSubmit={ this.props.signUpUser }/>
              </Modal>
            </div>
          </div>
        }
        { this.props.isSignedIn && !this.props.isSending &&
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
    isSignedIn: state.User.isSignedIn, 
    isModalOpen: state.User.isModalOpen 
  }
}

export default connect( mapStateToProps, Actions)(UserForms)
