const authKeys =  [ 'access-token', 'client', 'expiry', 'token-type', 'uid' ]

const tokenKey =  'tokenKey'
const userKey = 'user'

const saveStringifyJson = (key, json) => {
  console.log(json)
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
      let tokens = {}
      authKeys.map( key => { tokens[key] = headers[key] })
      saveStringifyJson(tokenKey, tokens)
    }
  },
      
  tokenExists() { return itemExists(tokenKey) },
  fetchToken() { return fetchJsonData(tokenKey) },
  deleteToken() { deleteItem(tokenKey) },


  saveUser(json){ saveStringifyJson(userKey) },
  userExists() { return itemExists(userKey) },
  fetchUser(){ return fetchJsonData(userKey) },
  deleteUser() { deleteItem(userKey) },

  clearAll(){ window.sessionStorage.clear() }
}

export default ClientStorage
