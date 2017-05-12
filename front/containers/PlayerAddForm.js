import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { addPlayer }        from '../actions/Player'

export class PlayerAddForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      name: this.refs.inputName.value.trim(),
      group: this.refs.inputGroup.value.trim(),
      guitar_id: this.props.guitarId 
    }
    this.props.addPlayer(params)
  }

  componentDidUpdate(){
    document.getElementById('resetButton').click()
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onSubmitHandler.bind(this) }>
          <div>
            <label>
              Name:
              <input type="text" ref="inputName" />
            </label>
            <label>
              Group:
              <input type="text" ref="inputGroup" />
            </label>
          </div>
          <div>
            <input type="submit" value="Add player" disabled={this.props.isSending}/>
            <input type="reset" value="reset" id='resetButton' style={{display: 'none'}}/>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isSending: state.Guitar.isFetching }
}

export default connect(mapStateToProps, { addPlayer } )(PlayerAddForm)
