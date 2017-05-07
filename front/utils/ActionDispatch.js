const ActionDispatch = {
  executeApi(action, api, apiParams, extraActions, errorUrl){
    return dispatch => {
      if(extraActions){
        extraActions.map((action) => {
          dispatch(action())
        })
      }
      return api(apiParams)
        .then(json => dispatch(action(json)))
    }
  }
}

export default ActionDispatch
