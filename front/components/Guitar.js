import React, { Component } from 'react'

class Guitar extends Component {
  onEditHandler(e){
    e.preventDefault()
    this.props.onEdit(this.props.params.id)
  }

  onDeleteHandler(e){
    e.preventDefault()
    this.props.onDelete(this.props.params.id)
  }

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
        <td>
          <button onClick={this.onEditHandler.bind(this)}>
            edit
          </button>
        </td>
        <td>
          <button onClick={this.onDeleteHandler.bind(this)}>
            delete
          </button>
        </td>
      </tr>
    )
  }
}

export default Guitar
