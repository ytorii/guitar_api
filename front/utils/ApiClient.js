import request       from 'superagent'
import ClientStorage from './ClientStorage'

const onSuccess = (response) => {
  ClientStorage.saveToken(response.headers)
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
      .set(ClientStorage.fetchToken())
      .query(params)
      .then(onSuccess, onFailure)
  },
  post(path, params) {
    return request
      .post(path)
      .set(ClientStorage.fetchToken())
      .send(params)
      .then(onSuccess, onFailure)
  },
  patch(path, params) {
    return request
      .patch(path)
      .set(ClientStorage.fetchToken())
      .send(params)
      .then(onSuccess, onFailure)
  },
  delete(path) {
    return request
      .del(path)
      .set(ClientStorage.fetchToken())
      .then(onSuccess, onFailure)
  }
}

export default ApiClient
