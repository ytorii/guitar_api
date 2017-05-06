import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import * as GuitarAPIs  from '../api/Guitar'
import ActionDispatch   from '../utils/ActionDispatch'

export const selectMaker = createAction(Actions.guitar.selectMaker,
  (maker) => { return { selectedMaker: maker } } )
export const toggleEdit = createAction(Actions.guitar.toggleEdit,
  (id) => { return { id: id } } )
export const toggleGuitarModal = createAction(Actions.guitar.toggleModal)

const requestGuitar = createAction(Actions.guitar.requestList)

export const fetchGuitars = () => {
  return dispatch => {
    dispatch(requestGuitar())
    return ActionDispatch.executeApi(createAction(Actions.guitar.createList), 
      GuitarAPIs.fetchAPI)(dispatch)
  }
}

export const addGuitar = (params) => {
  return dispatch => {
    dispatch(requestGuitar())
    return ActionDispatch.executeApi(createAction(Actions.guitar.addGuitar),
      GuitarAPIs.addAPI, params)(dispatch)
  }
}

export const showGuitar = (id) => {
  return dispatch => {
    dispatch(toggleGuitarModal())
    dispatch(requestGuitar())
    return ActionDispatch.executeApi(createAction(Actions.guitar.showGuitar),
      GuitarAPIs.showAPI, id)(dispatch)
  }
}

export const editGuitar = (params) => {
  return dispatch => {
    dispatch(requestGuitar())
    return ActionDispatch.executeApi(createAction(Actions.guitar.editGuitar),
      GuitarAPIs.editAPI, params)(dispatch)
  }
}

export const deleteGuitar = (id) => {
  return dispatch => {
    dispatch(toggleGuitarModal())
    dispatch(requestGuitar())
    return ActionDispatch.executeApi(createAction(Actions.guitar.deleteGuitar),
      GuitarAPIs.deleteAPI, id)(dispatch)
  }
}
