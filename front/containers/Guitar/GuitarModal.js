import React , { Component } from 'react'
import { connect }           from 'react-redux'
import { toggleProp }        from '../../actions/Guitar'
import Guitar                from './Guitar'
import Modal                 from '../../components/Modal'
import PlayerContainers      from '../PlayerContainers'

class GuitarModal extends Component {
  onCloseHandler(e){
    e.preventDefault()
    this.props.toggleProp('isModalOpen')
  }

  render(){
    return (
      <Modal isOpen={this.props.isModalOpen} onClose={this.onCloseHandler.bind(this)}>
        <Guitar />
        <PlayerContainers />
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return { isModalOpen: state.Guitar.isModalOpen }
}

GuitarModal.propTypes ={
  isModalOpen: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, { toggleProp })(GuitarModal)
