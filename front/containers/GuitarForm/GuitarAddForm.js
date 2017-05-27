import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { addGuitar }        from '../../actions/Guitar'

export class GuitarAddForm extends Component {
  onSubmitHandler(e) {
    e.preventDefault()
    const params = {
      name: this.refs.inputName.value.trim(),
      maker: this.refs.inputMaker.value.trim()
    }
    this.props.addGuitar(params)
  }

  componentDidUpdate(){
    document.getElementById('resetButton').click()
  }

  render() {
    return (
      <div>
        <p>Add your guitar!</p>
        <form onSubmit={ this.onSubmitHandler.bind(this) }>
          <div>
            <label>
              Model Name:
              <input type="text" ref="inputName" />
            </label>
            <label>
              Maker:
              <input type="text" ref="inputMaker" />
            </label>
          </div>
          <div>
            <input type="submit" value="Add guitar" disabled={this.props.isSending}/>
            <input type="reset" value="reset" id='resetButton' style={{display: 'none'}}/>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.Guitar.errors)
  return { isSending: state.Guitar.isFetching }
}

GuitarAddForm.propTypes ={
  isSending: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, { addGuitar } )(GuitarAddForm)
