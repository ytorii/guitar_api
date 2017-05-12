import React , { Component } from 'react'
import { connect }           from 'react-redux'
import UserForms             from './UserForms'
import GuitarContainers      from './GuitarContainers'

class GuitarApp extends Component {
  render(){
    return (
      <div>
        <UserForms />
        <GuitarContainers />
      </div>
    )
  }
}

export default connect()(GuitarApp)
