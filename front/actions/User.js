import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import ApiClient        from '../utils/ApiClient'

const APIPath = 'http://192.168.0.8:3000'
const authAPIPath = `${APIPath}/auth`

const userRequest = createAction(Actions.user.sendCredentials)
const userSignIn = createAction(Actions.user.signIn)
const userSignOut = createAction(Actions.user.signOut)

const signUpAPI = (params) => ApiClient.post(authAPIPath, params)
const signInAPI = (params) => ApiClient.post(`${authAPIPath}/sign_in`, params)
//const signOutAPI = () => ApiClient.delete(`${authAPIPath}/sign_out`)
const signOutAPI = () => ApiClient.delete('http://192.168.0.8:3000/auth/sign_out')

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
