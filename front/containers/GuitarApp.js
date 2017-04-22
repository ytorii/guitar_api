import React , { Component } from 'react'
import { connect }           from 'react-redux'
import UserForms             from './UserForms'
import GuitarForm            from './GuitarForm'
import GuitarsList           from './GuitarsList'
import MakerSelect           from './MakerSelect'
import * as Actions          from '../actions/User'

class GuitarApp extends Component {
  render(){
    return (
      <div>
        { !this.props.isSignedIn &&
          <div>
            <UserForms />
          </div>
        }
        { this.props.isSignedIn &&
          <div>
            <GuitarForm />
            <br />
            <MakerSelect />
            <GuitarsList />
            <button onClick={ e => {
              e.preventDefault()
              this.props.signOutUser()
            }} >
              Sign Out
            </button>
          </div>
        }
      </div>
    )
  }
}

const  mapStateToProps = (state) => {
    return {
      isSignedIn: state.User.isSignedIn
    }
  }
export default connect(mapStateToProps, Actions)(GuitarApp)
