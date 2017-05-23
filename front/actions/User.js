import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import ClientStorage    from '../utils/ClientStorage'
import * as UserAPIs    from '../api/User'

const userSignIn = createAction(Actions.user.signIn)
const userSignOut = createAction(Actions.user.signOut)

const errorAction = createAction(Actions.user.error)

export const toggleUserSending = createAction(Actions.user.toggleSending)
export const toggleUserModal = createAction(Actions.user.toggleModal)

export const signUpUser = (params) => {
  return dispatch => {
    dispatch(toggleUserSending())
    return UserAPIs.signUpAPI(params)
      .then(json => {
        ClientStorage.saveUser(json.data)
        dispatch(userSignIn(json.data))
      })
      .catch((error) => dispatch(errorAction(error)))
  }
}

export const signInUser = (params) => {
  return dispatch => {
    dispatch(toggleUserSending())
    return UserAPIs.signInAPI(params)
      .then(json => {
        ClientStorage.saveUser(json.data)
        return dispatch(userSignIn(json.data))
      })
      .catch((error) => dispatch(errorAction(error)))
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
      .catch((error) => dispatch(errorAction(error)))
  }
}
