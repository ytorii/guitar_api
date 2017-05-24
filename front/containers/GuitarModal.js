import React , { Component } from 'react'
import { connect }           from 'react-redux'
import { toggleGuitarModal } from '../actions/Guitar'
import Guitar                from './Guitar'
import Modal                 from '../components/Modal'

class GuitarModal extends Component {
  render(){
    return (
      <Modal isOpen={this.props.isModalOpen} onClose={this.props.toggleGuitarModal}>
        { this.props.isModalOpen &&
          <Guitar />
        }
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return { isModalOpen: state.Guitar.isModalOpen }
}

export default connect(mapStateToProps, { toggleGuitarModal })(GuitarModal)
