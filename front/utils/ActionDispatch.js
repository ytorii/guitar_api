import { normalize } from 'normalizr'

const normalizeJson = (json, schema) => {
  if(schema){
    json = json instanceof Array ? json : [ json ]
    return normalize(json, schema)
  }

  return json
}

const dispatchActions = (dispatch, actions) => {
  if(actions instanceof Array){
    actions.map((action) => { dispatch(action()) })
  } else {
    dispatch(actions())
  }
}      

const ActionDispatch = {
  execute(action, params, extraActions){
    return dispatch => {
      dispatchActions(dispatch, extraActions)
      dispatch(action(params))
    }
  },

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
