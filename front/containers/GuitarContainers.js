import React , { Component } from 'react'
import { connect }           from 'react-redux'
import GuitarAddForm         from './GuitarAddForm'
import GuitarsList           from './GuitarsList'
import MakerSelect           from './MakerSelect'

class GuitarContainers extends Component {
  render(){
    return (
      <div>
        <h1> The guitars list </h1>
        <GuitarAddForm />
        <br />
        <GuitarsList />
      </div>
    )
  }
}

export default connect()(GuitarContainers)
