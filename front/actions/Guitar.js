import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import * as GuitarAPI   from '../api/Guitar'
import GuitarSchema     from '../schemas/Guitar'
import ActionDispatch   from '../utils/ActionDispatch'

const schema = [ GuitarSchema ]

export const selectMaker = createAction(Actions.guitar.selectMaker,
  (maker) => { return { selectedMaker: maker } } )

export const toggleEdit = createAction(Actions.guitar.toggleEdit)
export const toggleGuitarModal = createAction(Actions.guitar.toggleModal)

export const requestGuitar = createAction(Actions.guitar.requestGuitar)
export const recieveGuitar = createAction(Actions.guitar.recieveGuitar)

export const showGuitar = createAction(Actions.guitar.show)

export const fetchGuitars = () => {
  return ActionDispatch.normalizeExecuteApi(createAction(Actions.guitar.createList), 
    GuitarAPI.fetch(), [ requestGuitar ], schema)
}

export const addGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.createList),
    GuitarAPI.add(params), [ requestGuitar ], schema)
}

export const editGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.createList),
    GuitarAPI.edit(params), [ requestGuitar ], schema)
}

export const deleteGuitar = (id) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.delete),
    GuitarAPI.del(id), [ requestGuitar, toggleGuitarModal ])
}
