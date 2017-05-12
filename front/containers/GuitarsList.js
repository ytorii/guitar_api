import React , { Component } from 'react'
import { connect }           from 'react-redux'
import * as Actions          from '../actions/Guitar'
import Guitar                from './Guitar'
import GuitarElememt         from '../components/GuitarElement'
import GuitarEditForm        from '../components/GuitarEditForm'
import Modal                 from '../components/Modal'

class GuitarsList extends Component {
  componentDidMount(){
    this.props.fetchGuitars()
  }

  renderGuitar(guitar){
    return (
      <GuitarElememt
        params={ guitar }
        key={ guitar.id }
        onShow={ this.props.showGuitar }
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
          <div>
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
            <Modal isOpen={this.props.isModalOpen} onClose={this.props.toggleGuitarModal}>
              { this.props.isModalOpen &&
                <Guitar />
              }
            </Modal>
          </div>
        }
      </div>
    )
  }
}

const filterMaker = (guitars, selectedMaker) => {
  return guitars.filter(g => g.maker == selectedMaker) 
}

const mapStateToProps = (state) => {
  const { guitars, isFetching, selectedMaker, isModalOpen } = state.Guitar
  const guitarsList = selectedMaker ?  filterMaker(guitars, selectedMaker) : guitars

  return { guitarsList, isFetching, isModalOpen }
}

export default connect(mapStateToProps, Actions)(GuitarsList)
