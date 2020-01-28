import axios from 'axios'

export default {
  SelectedItem: ({ commit }, item) => {
    commit('selected', item)
  },

  async GetHouses ({ commit }) {
    const response = await axios.get(
      'https://localhost:44367/api/GetHouses'
    )

    commit('addhouses', response.data)
  }

  // GetHouseDetails ({ commit }, house) {
  //   const HouseId = house.id
  //   commit('gethousedetails', HouseId)
  // }
}
