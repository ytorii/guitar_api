import React , { Component } from 'react'
import { connect }           from 'react-redux'
import UserForms             from './UserForms'
import GuitarForm            from './GuitarForm'
import GuitarsList           from './GuitarsList'
import MakerSelect           from './MakerSelect'

class GuitarApp extends Component {
  render(){
    return (
      <div>
        <UserForms />
        { this.props.isSignedIn &&
          <div>
            <GuitarForm />
            <br />
            <MakerSelect />
            <GuitarsList />
          </div>
        }
      </div>
    )
  }
}

const  mapStateToProps = (state) => {
    return { isSignedIn: state.User.isSignedIn }
  }
export default connect(mapStateToProps)(GuitarApp)
