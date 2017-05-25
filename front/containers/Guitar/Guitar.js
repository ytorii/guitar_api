import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as Actions         from '../../actions/Guitar'
import GuitarModel          from '../../models/Guitar'
import GuitarComponent      from '../../components/GuitarComponent'
import GuitarEditForm       from '../GuitarForm/GuitarEditForm'
import PlayerContainers     from '../PlayerContainers'

class Guitar extends Component {
  render(){
    const { guitar, isEdit } = this.props
    return (
      <div>
        <h3>Guitar Data</h3>
        { isEdit ? 
          <GuitarEditForm guitar={ guitar } />
          :
          <GuitarComponent {...this.props} />
        }
        <PlayerContainers />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const entityId = state.Guitar.guitar
  return { 
    guitar: state.entities.Guitar.guitars[entityId],
    isEdit: state.Guitar.isEdit
  }
}

Guitar.propTypes ={
  guitar: React.PropTypes.instanceOf(GuitarModel).isRequired,
  isEdit: React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, Actions)(Guitar)
