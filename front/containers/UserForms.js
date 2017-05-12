import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { newSessionAPI }    from '../api/User'
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
      <div style={{background: '#a0d8ef', height: 20, padding: 5 }} >
        { !this.props.isSignedIn &&
          <div>
            <div style={{display: 'inline-block', marginRight: 10}} >
              Hello, Guest!
            </div>
            <div style={{display: 'inline-block', marginRight: 10}} >
              <SignInForm {...this.props} />
            </div>
            <div style={{display: 'inline-block', marginRight: 10}} >
              <button onClick= {this.onToggleHandler.bind(this)} >
                Create New Account
              </button>
              <Modal isOpen={this.props.isModalOpen} onClose={this.props.toggleUserModal}>
                <SignUpForm {...this.props} />
              </Modal>
            </div>
          </div>
        }
        { this.props.isSignedIn && this.props.user &&
          <div>
            <div style={{display: 'inline-block', marginRight: 10}} >
              Hello, {this.props.user.email}
            </div>
            <div style={{display: 'inline-block', marginRight: 10}} >
              <SignOutForm onClick={ this.props.signOutUser }/>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => state.User

export default connect( mapStateToProps, Actions)(UserForms)
