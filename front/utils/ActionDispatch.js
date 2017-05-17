import { normalize } from 'normalizr'

const normalizeJson = (json, schema) => {
  json = json instanceof Array ? json : [ json ]
  return schema ? normalize(json, schema) : json
}

const dispatchActions = (dispatch, actions) => {
  if(actions){
    actions.map((action) => { dispatch(action()) })
  }
}      

const ActionDispatch = {
  executeApi(action, api, extraActions, schema, errorUrl){
    return dispatch => {
      dispatchActions(dispatch, extraActions)
      return api
        .then(json => {
          json = normalizeJson(json, schema)
          return dispatch(action(json))
        })
    }
  }
}

export default ActionDispatch
