import BackendURLs      from '../constants/BackendURLs.js'
import ApiClient        from '../utils/ApiClient'

export const signUpAPI = (params) => ApiClient.post(BackendURLs.user.signUp, params)
export const signInAPI = (params) => ApiClient.post(BackendURLs.user.signIn, params)
export const signOutAPI = () => ApiClient.delete(BackendURLs.user.signOut)
