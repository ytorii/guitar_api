import React, { Component } from 'react'

class Guitar extends Component {
  render(){
    const { params, onClick, onDelete } = this.props
    return (
      <tr>
        <td onClick={ e => {
          e.preventDefault()
          onClick(params.id)
        }}>
          {params.name}
        </td>
        <td style={{textAlign:'center'}}>
          {params.maker}
        </td>
        <td>
          <button onClick={ e => {
            e.preventDefault()
            onDelete(params.id)
          }}>
            delete
          </button>
        </td>
      </tr>
    )
  }
}

export default Guitar
