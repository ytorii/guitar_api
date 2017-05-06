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
      <div>
        <h3>Guitar Data</h3>
        <ul>
          <li>
            {this.props.params.name}
          </li>
          <li>
            {this.props.params.maker}
          </li>
        </ul>
        <p>Players of this Guitar</p>
        <ul>
          { this.props.params.players.map((player) => 
            <li key={player.id}>{ player.name }</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Guitar
