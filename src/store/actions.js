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
  },

  async CreateHouse ({ commit }, house) {
    let config = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    axios.post(
      'https://localhost:44367/api/UploadFile', house, config)
      .then((res) => {

      }).catch(err => {
        console.log(err)
      })
  },
  async CreateUser ({ commit }, user) {
    let config = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    axios.post(
      'https://localhost:44367/api/CreateUser', user, config)
      .then((res) => {

        // GetHouseDetails ({ commit }, house) {
        //   const HouseId = house.id
        //   commit('gethousedetails', HouseId)
        // }
      })
  },

  async LoginUser ({ commit }, user) {
    return new Promise((resolve, reject) => {
      let config = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      axios.post(
        'https://localhost:44367/api/LoginUser', user, config)
        .then((res) => {
          const token = res.data.token
          const userE = res.data.email
          const payload = {
            token,
            userE
          }
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', payload)
          resolve(res)
        }).catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
    })
  },

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}
