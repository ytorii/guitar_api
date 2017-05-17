import { normalize } from 'normalizr'

const normalizeJson = (json, schema) => {
  console.log(json)
  json = json instanceof Array ? json : [ json ]
  console.log(normalize(json, schema))
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
