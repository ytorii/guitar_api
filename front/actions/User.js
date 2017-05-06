import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import TokenStorage     from '../utils/TokenStorage'
import * as UserAPIs    from '../api/User'

const userRequest = createAction(Actions.user.sendCredentials)
const userSignIn = createAction(Actions.user.signIn)
const userSignOut = createAction(Actions.user.signOut)
export const toggleUserModal = createAction(Actions.user.toggleModal)

export const signUpUser = (params) => {
  return dispatch => {
    dispatch(userRequest())
    return UserAPIs.signUpAPI(params)
      .then(json => dispatch(userSignIn(json)))
  }
}

export const signInUser = (params) => {
  return dispatch => {
    dispatch(userRequest())
    return UserAPIs.signInAPI(params)
      .then(json => dispatch(userSignIn(json)))
  }
}

export const signOutUser = () => {
  return dispatch => {
    return UserAPIs.signOutAPI()
      .then( json => {
        TokenStorage.delete()
        return dispatch(userSignOut(json))
      })
  }
}
