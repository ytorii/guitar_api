import { createAction } from 'redux-actions'
import Actions          from '../constants/Actions'
import ApiClient        from '../utils/ApiClient'

const authAPIPath = 'http://192.168.0.8:3000/auth'

const userRequest = createAction(Actions.user.sendCredentials)
export const userSignIn = createAction(Actions.user.signIn)

const signUpAPI = (params) => ApiClient.post(authAPIPath, params)
const signInAPI = (params) => ApiClient.post(`${authAPIPath}/sign_in`, params)

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
