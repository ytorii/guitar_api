import BackendURLs      from '../constants/BackendURLs'
import ApiClient        from '../utils/ApiClient'

export const add = (params) => ApiClient.post(BackendURLs.votes, params)
export const del = (id) => ApiClient.delete(BackendURLs.vote(id))
