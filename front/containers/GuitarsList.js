import React , { Component } from 'react'
import { connect }           from 'react-redux'
import GuitarsListTable      from '../components/GuitarsListTable'

class GuitarsList extends Component {
  render(){
    return (
     <GuitarsListTable guitars={ this.props.guitars } />
    )
  }
}

const filterMaker = (guitars, selectedMaker) => {
  return guitars.filter(g => g.maker == selectedMaker) 
}

const mapStateToProps = (state) => {
  const { guitars, selectedMaker } = state.Guitar
  const guitarsList = selectedMaker ?  filterMaker(guitars, selectedMaker) : guitars

  return { guitars }
}

export default connect(mapStateToProps)(GuitarsList)
