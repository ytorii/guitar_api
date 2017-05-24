import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { showGuitar }        from '../actions/Guitar'

class GuitarElement extends Component {
  onShowHandler(e){
    e.preventDefault()
    this.props.showGuitar(this.props.guitar.id)
  }

  render(){
    return (
      <tr>
        <td>
          {this.props.guitar.name}
        </td>
        <td style={{textAlign:'center'}}>
          {this.props.guitar.maker}
        </td>
        <td>
          <button onClick={this.onShowHandler.bind(this)}>
            show
          </button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    guitar: state.entities.Guitar.guitars[ownProps.entityId]
  }
}

export default connect(mapStateToProps, { showGuitar })(GuitarElement)
