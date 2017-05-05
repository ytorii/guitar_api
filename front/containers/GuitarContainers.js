import React , { Component } from 'react'
import { connect }           from 'react-redux'
import GuitarForm            from './GuitarForm'
import GuitarsList           from './GuitarsList'
import MakerSelect           from './MakerSelect'

class GuitarContainers extends Component {
  render(){
    return (
      <div>
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

export default connect()(GuitarContainers)
