import React , { Component } from 'react'
import { connect }           from 'react-redux'
import * as Actions          from '../actions/Guitar'
import Guitar                from '../components/Guitar'
import GuitarEditForm        from '../components/GuitarEditForm'

class GuitarsList extends Component {
  componentDidMount(){
    this.props.fetchGuitars()
  }

  renderGuitar(guitar){
    return (
      guitar.isEdit ? 
        <GuitarEditForm
          params={ guitar }
          key={ guitar.id }
          onClick={ this.props.editGuitar }
          onCancel={ this.props.toggleEdit }
        />
        :
        <Guitar
          params={ guitar }
          key={ guitar.id }
          onEdit={ this.props.toggleEdit }
          onDelete={ this.props.deleteGuitar }
        /> 
    )
  }

  render(){
    return (
      <div>
        { this.props.isFetching &&
          <h3>Loading...</h3>
        }
        { !this.props.isFetching &&
          <table>
            <thead>
              <tr><th>ModelName</th><th>Maker</th></tr>
            </thead>
            <tbody>
              { this.props.guitarsList.map((guitar) =>
                  this.renderGuitar(guitar)
              )}
            </tbody>
          </table>
        }
      </div>
    )
  }
}

const filterMaker = (guitars, selectedMaker) => {
  return guitars.filter(g => g.maker == selectedMaker) 
}

const mapStateToProps = (state) => {
  const { guitars, isFetching, selectedMaker } = state.Guitar
  const guitarsList = selectedMaker ?
    filterMaker(guitars, selectedMaker) : guitars

  return { guitarsList, isFetching }
}

export default connect(mapStateToProps, Actions)(GuitarsList)
