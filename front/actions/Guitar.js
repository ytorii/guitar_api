import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import * as GuitarAPI  from '../api/Guitar'
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
    GuitarAPI.fetch(), [ requestGuitar ])
}

export const addGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.add),
    GuitarAPI.add(params), [ requestGuitar ])
}

export const showGuitar = (id) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.show),
    GuitarAPI.show(id), [ requestGuitar, toggleGuitarModal ])
}

export const editGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.edit),
    GuitarAPI.edit(params), [ requestGuitar ])
}

export const deleteGuitar = (id) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.delete),
    GuitarAPI.del(id), [ requestGuitar, toggleGuitarModal ])
}
