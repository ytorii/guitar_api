import { normalize } from 'normalizr'

const normalizeJson = (json, schema) => {
  if(schema){
    json = json instanceof Array ? json : [ json ]
    return normalize(json, schema)
  }

  return json
}

const dispatchExtraActions = (dispatch, actions) => {
  if(actions){
    actions.map((action) => { dispatch(action()) })
  }
}      

const ActionDispatch = {
  executeApi(action, api, extraActions, schema, errorUrl){
    return dispatch => {
      dispatchExtraActions(dispatch, extraActions)
      return api
        .then(json => {
          json = normalizeJson(json, schema)
          return dispatch(action(json))
        })
    }
  }
}

export default ActionDispatch
