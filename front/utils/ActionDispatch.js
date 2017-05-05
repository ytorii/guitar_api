const ActionDispatch = {
  executeApi(action, api, apiParams, errorUrl){
    return dispatch => {
      return api(apiParams)
        .then(json => dispatch(action(json)))
    }
  }
}

export default ActionDispatch
