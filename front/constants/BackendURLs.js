import BackendURL from 'Config'

export default {
  user: {
    signUp: `${BackendURL}/auth`,
    signIn: `${BackendURL}/auth/sign_in`,
    signOut: `${BackendURL}/auth/sign_out`
  },
  guitars: `${BackendURL}/guitars`,
  guitar: (id) => `${BackendURL}/guitars/${id}`,
  players: `${BackendURL}/players`,
  player: (id) => `${BackendURL}/players/${id}`,
  votes: (params) => `${BackendURL}/players/${params.player_id}/votes`,
  vote: (params) => `${BackendURL}/players/${params.player_id}/votes/${params.id}`
}

