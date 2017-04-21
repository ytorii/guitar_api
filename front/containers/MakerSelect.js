import React , { Component } from 'react'
import { connect }           from 'react-redux'
import { selectMaker }       from '../actions/Guitar'

const uniqueMaker = (guitars) => {
  return ['', ...new Set(guitars.map((g) => g.maker))]
}

class MakerSelect extends Component {
  render(){
    return (
      <div>
        Select favorite maker: 
        <select onChange={ e => {
            e.preventDefault()
            this.props.selectMaker(e.target.value)
          }}
          value={this.props.selectedMaker}>
          {
            uniqueMaker(this.props.guitars).map( maker => 
            <option value={maker} key={maker}>{maker}</option>)
          }
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    guitars: state.Guitar.guitars,
    selectedMaker: state.Guitar.selectedMaker
  }
}
export default connect(mapStateToProps, { selectMaker })(MakerSelect)
