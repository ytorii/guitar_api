import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import BackendURLs      from '../constants/BackendURLs.js'
import ApiClient        from '../utils/ApiClient'

const userRequest = createAction(Actions.user.sendCredentials)
const userSignIn = createAction(Actions.user.signIn)
const userSignOut = createAction(Actions.user.signOut)
const userCheckSignin = createAction(Actions.user.checkSignin)

const signUpAPI = (params) => ApiClient.post(BackendURLs.user.signUp, params)
const signInAPI = (params) => ApiClient.post(BackendURLs.user.signIn, params)
const signOutAPI = () => ApiClient.delete(BackendURLs.user.signOut)
const checkSigninAPI = () => ApiClient.get(BackendURLs.user.checkSignin)

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
      .then( json => dispatch(userSignOut(json)))
  }
}

export const checkSigninUser = () => {
  return dispatch => {
    return checkSigninAPI()
      .then( json => dispatch(userCheckSignin(json)))
  }
}
