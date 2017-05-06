import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/User'
import SignUpForm           from '../components/SignUpForm'
import SignInForm           from '../components/SignInForm'
import SignOutForm          from '../components/SignOutForm'
import Modal                from '../components/Modal'

export class UserForms extends Component {
  onToggleHandler(e){
    e.preventDefault()
    this.props.toggleUserModal()
  }

  render() {
    return (
      <div>
        { !this.props.isSignedIn &&
          <div>
            <div>
              <SignInForm {...this.props} />
            </div>
            <br />
            <div>
              <button onClick= {this.onToggleHandler.bind(this)} >
                Create New Account
              </button>
              <Modal isOpen={this.props.isModalOpen} onClose={this.props.toggleUserModal}>
                <SignUpForm {...this.props} />
              </Modal>
            </div>
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
    isModalOpen: state.User.isModalOpen 
  }
}

export default connect( mapStateToProps, Actions)(UserForms)
