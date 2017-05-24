import React , { Component } from 'react'
import { connect }           from 'react-redux'
import { fetchGuitars }      from '../actions/Guitar'
import GuitarAddForm         from './GuitarAddForm'
import GuitarsList           from './GuitarsList'
import GuitarModal           from './GuitarModal'
import MakerSelect           from './MakerSelect'

class GuitarContainers extends Component {
  componentDidMount(){
    this.props.fetchGuitars()
  }

  render(){
    return (
      <div>
        <h1> The guitars list </h1>
        <GuitarAddForm />
        <br />
        { this.props.isFetching &&
          <h3>Loading...</h3>
        }
        { !this.props.isFetching &&
          <div>
            <GuitarsList />
            <GuitarModal />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isFetching: state.Guitar.isFetching }
}

export default connect(mapStateToProps, { fetchGuitars })(GuitarContainers)
