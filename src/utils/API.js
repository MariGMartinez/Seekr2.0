import axios from 'axios'

export const API = {
  searchTrails: function (lat, lng) {
    return axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=50&key=200291985-53a4087f9af13c0073c4ab63808a8d04`)
  },
  searchAddress: function (address) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo`)
  },
  getTrails: function () {
    return axios.get('/api/trails')
  },
  findTrailByName: function (id) {
    return axios.get('/api/trails/find/' + id)
  },
  getTrail: function (id) {
    return axios.get('/api/trails/' + id)
  },
  updateTrail: function (id, item) {
    return axios.put('/api/trails/' + id, item)
  },
  deleteTrail: function (id) {
    return axios.delete('/api/trails/' + id)
  },
  saveTrail: function (trailData) {
    return axios.post('/api/trails', trailData)
  }
}
