import request          from 'superagent'
import ClientStorage    from './ClientStorage'
import ApiResponseError from './ApiResponseError'

const onSuccess = (response) => {
  ClientStorage.saveToken(response.headers)
  return response.body
}

const onFailure = (error) => {
  throw new ApiResponseError(error)
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
