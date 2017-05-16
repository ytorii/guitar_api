import { normalize } from 'normalizr'

const ActionDispatch = {
  executeApi(action, api, extraActions, schema, errorUrl){
    return dispatch => {
      if(extraActions){
        extraActions.map((action) => { dispatch(action()) })
      }
      return api
        .then(json => {
          const { result, entities } = normalize( [ json ], schema)
          console.log({ result, entities })
          return dispatch(action({ result, entities }))
          //return dispatch(action(json))
        })
    }
  },

  normalizeExecuteApi(action, api, extraActions, schema, errorUrl){
    return dispatch => {
      if(extraActions){
        extraActions.map((action) => { dispatch(action()) })
      }
      return api
        .then(json => {
          const { result, entities } = normalize( json, schema)
          return dispatch(action({ result, entities }))
        })
    }
  }
}

export default ActionDispatch
