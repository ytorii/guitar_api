import { normalize } from 'normalizr'
import GuitarSchema from '../schemas/Guitar'

const schema = [ GuitarSchema ]

const ActionDispatch = {
  executeApi(action, api, extraActions, errorUrl){
    return dispatch => {
      if(extraActions){
        extraActions.map((action) => {
          dispatch(action())
        })
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
