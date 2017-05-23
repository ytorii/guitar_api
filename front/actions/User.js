import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import ClientStorage    from '../utils/ClientStorage'
import * as UserAPIs    from '../api/User'

const userSignIn = createAction(Actions.user.signIn)
const userSignOut = createAction(Actions.user.signOut)

export const toggleUserSending = createAction(Actions.user.toggleSending)
export const toggleUserModal = createAction(Actions.user.toggleModal)

export const signUpUser = (params) => {
  return dispatch => {
    dispatch(toggleUserSending())
    return UserAPIs.signUpAPI(params)
      .then(json => dispatch(userSignIn(json)))
  }
}

export const signInUser = (params) => {
  return dispatch => {
    dispatch(toggleUserSending())
    return UserAPIs.signInAPI(params)
      .then(json => dispatch(userSignIn(json)))
  }
}

export const signOutUser = () => {
  return dispatch => {
    dispatch(toggleUserSending())
    return UserAPIs.signOutAPI()
      .then( json => {
        ClientStorage.clearAll()
        return dispatch(userSignOut(json))
      })
  }
}
