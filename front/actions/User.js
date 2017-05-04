import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import BackendURLs      from '../constants/BackendURLs.js'
import ApiClient        from '../utils/ApiClient'
import TokenStorage     from '../utils/TokenStorage'

const userRequest = createAction(Actions.user.sendCredentials)
const userSignIn = createAction(Actions.user.signIn)
const userSignOut = createAction(Actions.user.signOut)
export const toggleUserModal = createAction(Actions.user.toggleModal)

const signUpAPI = (params) => ApiClient.post(BackendURLs.user.signUp, params)
const signInAPI = (params) => ApiClient.post(BackendURLs.user.signIn, params)
const signOutAPI = () => ApiClient.delete(BackendURLs.user.signOut)

export const signUpUser = (params) => {
  return dispatch => {
    dispatch(userRequest())
    return signUpAPI(params)
      .then(json => dispatch(userSignIn(json)))
  }
}

export const signInUser = (params) => {
  return dispatch => {
    dispatch(userRequest())
    return signInAPI(params)
      .then(json => dispatch(userSignIn(json)))
  }
}

export const signOutUser = () => {
  return dispatch => {
    return signOutAPI()
      .then( json => {
        TokenStorage.delete()
        return dispatch(userSignOut(json))
      })

  }
}
