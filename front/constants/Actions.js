export default {
  user: {
    signUp: 'SIGNUP_USER_API',
    signIn: 'SIGNIN_USER_API',
    signOut: 'SIGNOUT_USER_API',
    toggleSending: 'TOGGLE_USER_SENDING',
    toggleModal: 'TOGGLE_USER_MODAL',
    error: 'ERROR_USER_API'
  },

  guitar: {
    merge: 'MERGE_GUITAR_API',
    show: 'SHOW_GUITAR',
    delete: 'DELETE_GUITAR_API',
    selectMaker: 'SELECT_GUITAR_MAKER',
    toggleEdit: 'TOGGLE_GUITAR_EDIT',
    toggleFetching: 'TOGGLE_GUITAR_FETCHING',
    toggleModal: 'TOGGLE_GUITAR_MODAL',
    error: 'ERROR_GUITAR_API'
  },

  player: {
    merge: 'MERGE_PLAYER_API',
    delete: 'DELETE_PLAYER_API',
    toggleSending: 'TOGGLE_GUITAR_SENDING',
    error: 'ERROR_PLAYER_API'
  },

  vote: {
    shift: 'SHIFT_VOTE_API',
    error: 'ERROR_VOTE_API'
  }
}
