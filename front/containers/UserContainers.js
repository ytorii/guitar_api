import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../actions/User'
import SignUpForm           from '../components/SignUpForm'
import SignInForm           from '../components/SignInForm'
import SignOutForm          from '../components/SignOutForm'
import Modal                from '../components/Modal'

export class UserContainers extends Component {
  onToggleHandler(e){
    e.preventDefault()
    this.props.toggleUserModal()
  }

  render() {
    console.log(this.props.errors)
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
              <button onClick= {this.onToggleHandler.bind(this)} disabled={this.props.isSending}>
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
            <div style={{display: 'inline-block', marginRight: 10}} >
              Hello, {this.props.user.nickname}
            </div>
            <div style={{display: 'inline-block', marginRight: 10}} >
              <SignOutForm {...this.props} />
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => state.User

export default connect( mapStateToProps, Actions)(UserContainers)
