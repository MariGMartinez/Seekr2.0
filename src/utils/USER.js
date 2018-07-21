import axios from 'axios'

export const USER = {
  getUsers: function () {
    return axios.get('/api/users')
  },
  login: function (data) {
    return axios.post('/api/users/login/' + data.username, data)
  },
  getUser: function (id) {
    return axios.get('/api/users/' + id)
  },
  updateUser: function (id, item) {
    return axios.put('/api/users/' + id, item)
  },
  addTrail: function (id, item) {
    return axios.put('/api/users/' + id, item)
  },
  deleteUser: function (id) {
    return axios.delete('/api/users/' + id)
  },
  saveUser: function (userData) {
    return axios.post('/api/users', userData)
  }
}
