import request from 'superagent'

const authKeys = [ 'access-token', 'client', 'expiry', 'token-type', 'uid' ]

const saveAuthHeaders = (headers) => {
  authKeys.map( (key) => {
    if(headers[key]){
      sessionStorage.removeItem(key)
      sessionStorage.setItem(key, headers[key])
    }
  })
}

const fetchAuthHeaders = () => {
  let authHeaders = {}

  authKeys.map( (key) => {
    authHeaders[key] = sessionStorage.getItem(key)
  })

  return authHeaders
}

const onSuccess = (response) => {
  saveAuthHeaders(response.headers)
  return response.body
}

const createErrorMessages = (errorBody) => {
  let errorMessages = []

  for (var key in errorBody) {
    // skip loop if the property is from prototype
    if (!errorBody.hasOwnProperty(key)) continue;

    errorBody[key].forEach((error) => {
      errorMessages.push(`${key}${error}`)
    })
  }

  return errorMessages
}

const onFailure = (error) => {
  console.log(error)
  let errorMessages = []

  if (error.status === 404) {
    errorMessages = ['Not Found']
  } else {
    errorMessages = error
    //errorMessages = createErrorMessages(error)
  }

  return errorMessages
}

const ApiClient = {
  get(path, params) {
    return request
      .get(path)
      .set(fetchAuthHeaders())
      .query(params)
      .then(onSuccess, onFailure)
  },
  post(path, params) {
    return request
      .post(path)
      .set(fetchAuthHeaders())
      .send(params)
      .then(onSuccess, onFailure)
  },
  patch(path, params) {
    return request
      .patch(path)
      .set(fetchAuthHeaders())
      .send(params)
      .then(onSuccess, onFailure)
  },
  delete(path) {
    return request
      .del(path)
      .set(fetchAuthHeaders())
      .then(onSuccess, onFailure)
  }
}

export default ApiClient
