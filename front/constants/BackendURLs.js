//const BackendURL = 'http://192.168.0.8:3000'
const BackendURL = 'http://localhost:3000'

export default {
  user: {
    signUp: `${BackendURL}/auth`,
    signIn: `${BackendURL}/auth/sign_in`,
    signOut: `${BackendURL}/auth/sign_out`
  },
  guitars: `${BackendURL}/guitars`,
  guitar: (id) => `${BackendURL}/guitars/${id}`
}

