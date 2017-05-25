import React , { Component } from 'react'
import { connect }           from 'react-redux'
import UserContainers        from './UserContainers'
import GuitarContainers      from './GuitarContainers'

class GuitarApp extends Component {
  render(){
    return (
      <div>
        <UserContainers />
        <GuitarContainers />
      </div>
    )
  }
}

export default connect()(GuitarApp)
