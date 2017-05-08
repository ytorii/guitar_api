import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import * as GuitarAPIs  from '../api/Guitar'
import ActionDispatch   from '../utils/ActionDispatch'

export const selectMaker = createAction(Actions.guitar.selectMaker,
  (maker) => { return { selectedMaker: maker } } )
export const toggleEdit = createAction(Actions.guitar.toggleEdit,
  (id) => { return { id: id } } )
export const toggleGuitarModal = createAction(Actions.guitar.toggleModal)

export const requestGuitar = createAction(Actions.guitar.requestGuitar)
export const recieveGuitar = createAction(Actions.guitar.recieveGuitar)

export const fetchGuitars = () => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.createList), 
    GuitarAPIs.fetchAPI, null, [ requestGuitar ])
}

export const addGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.add),
    GuitarAPIs.addAPI, params, [ requestGuitar ])
}

export const showGuitar = (id) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.show),
    GuitarAPIs.showAPI, id, [ requestGuitar, toggleGuitarModal ])
}

export const editGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.edit),
    GuitarAPIs.editAPI, params, [ requestGuitar ])
}

export const deleteGuitar = (id) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.delete),
    GuitarAPIs.deleteAPI, id, [ requestGuitar, toggleGuitarModal ])
}
