import _ from 'lodash'

const authKeys =  [ 'access-token', 'client', 'expiry', 'token-type', 'uid' ]

const tokenKey =  'tokenHeader'
const userKey = 'user'

const saveStringifyJson = (key, json) => {
  window.sessionStorage.setItem(key, JSON.stringify(json))
}

const fetchJsonData = (key) => {
  const data = JSON.parse(window.sessionStorage.getItem(key))
  return data ? data : {}
}

const setItem = (key, data) => window.sessionStorage.setItem(key, data)
const deleteItem = key => window.sessionStorage.removeItem(key)
const itemExists = key => window.sessionStorage.getItem(key) != undefined

const ClientStorage = {
  saveToken(headers) { 
    if(authKeys.every( key => typeof headers[key] !=  'undefined' )){
      saveStringifyJson(tokenKey, _.pick(headers, authKeys))
    }
  },
      
  tokenExists() { return itemExists(tokenKey) },
  fetchToken() { return fetchJsonData(tokenKey) },
  deleteToken() { deleteItem(tokenKey) },


  saveUser(json){ saveStringifyJson(userKey, json) },
  userExists() { return itemExists(userKey) },
  fetchUser(){ return fetchJsonData(userKey) },
  deleteUser() { deleteItem(userKey) },

  clearAll(){ window.sessionStorage.clear() }
}

export default ClientStorage
