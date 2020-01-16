export default {

  GetallHouses: (state) => {
    return state.Houses
  },

  GetHouseData: (state) => (id) => {
    return state.Houses.find(house => house.id === id)
  }
}
