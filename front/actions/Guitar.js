import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import * as GuitarAPI   from '../api/Guitar'
import GuitarSchema     from '../schemas/Guitar'
import ActionDispatch   from '../utils/ActionDispatch'

const schema = [ GuitarSchema ]

const errorAction = createAction(Actions.guitar.error)

export const toggleProp = createAction(Actions.guitar.toggleProp)

export const showGuitar = (id) =>  {
  return ActionDispatch.execute(createAction(Actions.guitar.show),
    id, toggleProp('isModalOpen'))
}

export const fetchGuitars = () => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.merge), 
    GuitarAPI.fetch(), toggleProp('isFetching'), schema, errorAction)
}

export const addGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.merge),
    GuitarAPI.add(params), toggleProp('isFetching'), schema, errorAction)
}

export const editGuitar = (params) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.merge),
    GuitarAPI.edit(params), toggleProp('isFetching'), schema, errorAction)
}

export const deleteGuitar = (id) => {
  return ActionDispatch.executeApi(createAction(Actions.guitar.delete),
    GuitarAPI.del(id), toggleProp('isFetching'), null, errorAction)
}
