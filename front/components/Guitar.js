import React, { Component } from 'react'

class Guitar extends Component {
  render(){
    const { params, onEdit, onDelete } = this.props
    return (
      <tr>
        <td>
          {params.name}
        </td>
        <td style={{textAlign:'center'}}>
          {params.maker}
        </td>
        <td>
          <button onClick={ e => {
            e.preventDefault()
            onEdit(params.id)
          }}>
            edit
          </button>
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
