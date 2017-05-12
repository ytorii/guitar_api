import BackendURLs      from '../constants/BackendURLs'
import ApiClient        from '../utils/ApiClient'

export const fetch = () => ApiClient.get(BackendURLs.players)
export const add = (params) => ApiClient.post(BackendURLs.players, params)
export const show = (id) => ApiClient.get(BackendURLs.player(id))
export const edit = (params) => ApiClient.patch(BackendURLs.player(params.id), params)
export const del = (id) => ApiClient.delete(BackendURLs.player(id))
