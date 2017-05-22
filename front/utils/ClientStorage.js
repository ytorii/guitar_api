const authKeys =  [ 'access-token', 'client', 'expiry', 'token-type', 'uid' ]

const ClientStorage = {
  saveToken(headers) {
    authKeys.map( (key) => {
      if(headers[key]){
        window.sessionStorage.removeItem(key)
        window.sessionStorage.setItem(key, headers[key])
      }
    })
  },

  tokenExists() {
    return !(window.sessionStorage.getItem(authKeys[0]) == undefined)
  },

  fetchToken() {
    let temp = {}

    if(this.tokenExists()){
      authKeys.map( (key) => {
        temp[key] = window.sessionStorage.getItem(key)
      })
    }
    return temp
  },

  deleteToken() {
    authKeys.map( (key) => {
      window.sessionStorage.removeItem(key)
    })
  }
}

export default ClientStorage
