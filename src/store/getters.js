export default {

  GetallHouses: (state) => {
    return state.Houses
  },

  GetHouseData: (state) => (id) => {
    return state.Houses.find(house => house.id === id)
  },

  isLoggedIn: (state) => {
    if (state.token !== '') { return true } else { return false }
  },

  authStatus: state => state.status,

  UserData: (state) => {
    return state.User
  }

}
