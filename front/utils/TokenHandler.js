const authKeys =  [ 'access-token', 'client', 'expiry', 'token-type', 'uid' ]

const clear = () => {
  authKeys.map( (key) => {
    sessionStorage.removeItem(key)
  })
}

const TokenHandler = {
  save(headers) {
    authKeys.map( (key) => {
      if(headers[key]){
        sessionStorage.removeItem(key)
        sessionStorage.setItem(key, headers[key])
      }
    })
  },

  fetch() {
    let temp = {}

    authKeys.map( (key) => {
      temp[key] = sessionStorage.getItem(key)
    })

    return temp
  }
}

export default TokenHandler
