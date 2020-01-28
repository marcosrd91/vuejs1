export default {
  addhouses: (state, houses) => {
    state.Houses = houses
  },

  SetUser: (state, user) => {
    state.user = user
  },
  auth_request: (state) => {
    state.status = 'loading'
  },
  auth_success: (state, payload) => {
    state.status = 'success'
    state.token = payload.token
    state.User = payload.userE
  },
  auth_error: (state) => {
    state.status = 'error'
  },
  logout: (state) => {
    state.status = ''
    state.token = ''
  }
}
