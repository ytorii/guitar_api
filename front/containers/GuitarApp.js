import React , { Component } from 'react'
import { connect }           from 'react-redux'
import UserForms             from './UserForms'
import GuitarContainers      from './GuitarContainers'

class GuitarApp extends Component {
  render(){
    return (
      <div>
        <UserForms isSignedIn={this.props.isSignedIn}/>
        <GuitarContainers />
      </div>
    )
  }
}

const  mapStateToProps = (state) => {
  return {
    isSignedIn: state.User.isSignedIn,
  }
}

export default connect(mapStateToProps)(GuitarApp)
