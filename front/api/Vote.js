import BackendURLs      from '../constants/BackendURLs'
import ApiClient        from '../utils/ApiClient'

export const add = (params) => ApiClient.post(BackendURLs.votes(params), params)
export const del = (params) => ApiClient.delete(BackendURLs.vote(params))
