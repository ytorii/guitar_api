import { createAction } from 'redux-actions'
import Actions from '../constants/Actions'
import ApiClient from '../utils/ApiClient'

const guitarsAPIPath = 'http://192.168.0.8:3000/guitars'

const requestGuitarsList = createAction(Actions.guitar.requestList)
const createGuitarsList = createAction(Actions.guitar.createList)

const addGuitarAction = createAction(Actions.guitar.addGuitar)
const editGuitarAction = createAction(Actions.guitar.editGuitar)
const deleteGuitarAction = createAction(Actions.guitar.deleteGuitar)

export const selectMaker = createAction(Actions.guitar.selectMaker,
  (maker) => { return { selectedMaker: maker } } )
export const toggleEdit = createAction(Actions.guitar.toggleEdit,
  (id) => { return { id: id } } )

const fetchAPI = () => ApiClient.get(guitarsAPIPath)
const createAPI = (params) => ApiClient.post(guitarsAPIPath, params)
const editAPI = (params) => ApiClient.patch(`${guitarsAPIPath}/${params.id}`, params)
const deleteAPI = (id) => ApiClient.delete(`${guitarsAPIPath}/${id}`)

const actionDispatch = (api, action, params) => {
  return dispatch => {
    dispatch(requestGuitarsList())
    return api(params)
      .then(json => dispatch(action(json)))
  }
}

export const fetchGuitars = () => {
  return actionDispatch(fetchAPI, createGuitarsList)
}

export const addGuitar = (params) => {
  return actionDispatch(createAPI, addGuitarAction, params)
}

export const editGuitar = (params) => {
  return actionDispatch(editAPI, editGuitarAction, params)
}

export const deleteGuitar = (id) => {
  return actionDispatch(deleteAPI, deleteGuitarAction, id)
}
