import BackendURLs      from '../constants/BackendURLs'
import ApiClient        from '../utils/ApiClient'

export const fetch = () => ApiClient.get(BackendURLs.guitars)
export const add = (params) => ApiClient.post(BackendURLs.guitars, params)
export const show = (id) => ApiClient.get(BackendURLs.guitar(id))
export const edit = (params) => ApiClient.patch(BackendURLs.guitar(params.id), params)
export const del = (id) => ApiClient.delete(BackendURLs.guitar(id))
