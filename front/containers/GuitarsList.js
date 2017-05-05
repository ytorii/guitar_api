import React , { Component } from 'react'
import { connect }           from 'react-redux'
import * as Actions          from '../actions/Guitar'
import Guitar                from '../components/Guitar'
import GuitarEditForm        from '../components/GuitarEditForm'
import Modal                 from '../components/Modal'

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
          onShow={ this.props.toggleGuitarModal }
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
        <Modal isOpen={this.props.isModalOpen} onClose={this.props.toggleGuitarModal}>
          Hello!
        </Modal>
      </div>
    )
  }
}

const filterMaker = (guitars, selectedMaker) => {
  return guitars.filter(g => g.maker == selectedMaker) 
}

const mapStateToProps = (state) => {
  const { guitars, isFetching, selectedMaker, isModalOpen } = state.Guitar
  const guitarsList = selectedMaker ?
    filterMaker(guitars, selectedMaker) : guitars

  return { guitarsList, isFetching, isModalOpen }
}

export default connect(mapStateToProps, Actions)(GuitarsList)
