import BackendURLs      from '../constants/BackendURLs'
import ApiClient        from '../utils/ApiClient'

export const fetchAPI = () => ApiClient.get(BackendURLs.guitars)
export const addAPI = (params) => ApiClient.post(BackendURLs.guitars, params)
export const showAPI = (id) => ApiClient.get(BackendURLs.guitar(id))
export const editAPI = (params) => ApiClient.patch(BackendURLs.guitar(params.id), params)
export const deleteAPI = (id) => ApiClient.delete(BackendURLs.guitar(id))
