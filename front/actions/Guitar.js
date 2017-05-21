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
export const toggleGuitarFetching = createAction(Actions.guitar.toggleFetching)
export const toggleGuitarSending = createAction(Actions.guitar.toggleSending)

export const showGuitar = (id) =>  {
  return ActionDispatch.execute(createAction(Actions.guitar.show), id, [ toggleGuitarModal ])
}

export const fetchGuitars = () => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.merge), 
    GuitarAPI.fetch(), [ toggleGuitarFetching ], schema)
}

export const addGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.merge),
    GuitarAPI.add(params), [ toggleGuitarFetching ], schema)
}

export const editGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.merge),
    GuitarAPI.edit(params), null, schema)
}

export const deleteGuitar = (id) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.delete),
    GuitarAPI.del(id), [ toggleGuitarFetching, toggleGuitarModal ])
}
