export default {
  user: {
    signUp: 'SIGNUP_USER_API',
    signIn: 'SIGNIN_USER_API',
    signOut: 'SIGNOUT_USER_API',
    toggleSending: 'TOGGLE_USER_SENDING',
    toggleModal: 'TOGGLE_USER_MODAL'
  },

  guitar: {
    merge: 'MERGE_GUITAR_API',
    show: 'SHOW_GUITAR',
    edit: 'EDIT_GUITAR_API',
    delete: 'DELETE_GUITAR_API',
    selectMaker: 'SELECT_GUITAR_MAKER',
    toggleEdit: 'TOGGLE_GUITAR_EDIT',
    toggleFetching: 'TOGGLE_GUITAR_FETCHING',
    toggleSending: 'TOGGLE_GUITAR_SENDING',
    toggleModal: 'TOGGLE_GUITAR_MODAL'
  },

  player: {
    merge: 'MERGE_PLAYER_API',
    delete: 'DELETE_PLAYER_API',
    toggleSending: 'TOGGLE_GUITAR_SENDING'
  },

  vote: {
    shift: 'SHIFT_VOTE_API',
    request: 'REQUEST_VOTE',
    recieve: 'RECIEVE_VOTE'
  }
}
