import React, { Component } from 'react'

class GuitarElement extends Component {
  onShowHandler(e){
    e.preventDefault()
    this.props.onShow(this.props.params.id)
  }

  render(){
    return (
      <tr>
        <td>
          {this.props.params.name}
        </td>
        <td style={{textAlign:'center'}}>
          {this.props.params.maker}
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

export default GuitarElement
