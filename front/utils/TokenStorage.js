const authKeys =  [ 'access-token', 'client', 'expiry', 'token-type', 'uid' ]

const TokenStorage = {
  save(headers) {
    authKeys.map( (key) => {
      if(headers[key]){
        window.sessionStorage.removeItem(key)
        window.sessionStorage.setItem(key, headers[key])
      }
    })
  },

  exists() {
    return !(window.sessionStorage.getItem(authKeys[0]) == undefined)
  },

  fetch() {
    let temp = {}

    if(this.exists()){
      authKeys.map( (key) => {
        temp[key] = window.sessionStorage.getItem(key)
      })
    }
    return temp
  },

  delete() {
    authKeys.map( (key) => {
      window.sessionStorage.removeItem(key)
    })
  }
}

export default TokenStorage
