import React , { Component } from 'react'
import { connect }           from 'react-redux'
import { fetchGuitars }      from '../actions/Guitar'
import GuitarAddForm         from './GuitarForm/GuitarAddForm'
import GuitarsList           from './GuitarsList/GuitarsList'
import GuitarModal           from './Guitar/GuitarModal'

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
        <GuitarsList />
        <GuitarModal />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isFetching: state.Guitar.isFetching }
}

GuitarContainers.propTypes ={
  isFetching: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, { fetchGuitars })(GuitarContainers)
