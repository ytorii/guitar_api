import React , { Component } from 'react'
import { connect }           from 'react-redux'
import GuitarsListTable      from '../../components/GuitarsListTable'

class GuitarsList extends Component {
  render(){
    return (
      <div>
        { this.props.isFetching &&
          <h3>Loading...</h3>
        }
        { !this.props.isFetching &&
          <GuitarsListTable guitars={ this.props.guitars } />
        }
      </div>
    )
  }
}

const filterMaker = (guitars, selectedMaker) => {
  return guitars.filter(g => g.maker == selectedMaker) 
}

const mapStateToProps = (state) => {
  return {
    guitars: state.Guitar.guitars,
    isFetching: state.Guitar.isFetching 
  }
}

GuitarsList.propTypes ={
  guitars: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  isFetching: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(GuitarsList)
