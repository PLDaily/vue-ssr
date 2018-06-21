import axios from 'axios'
const config = require('../../config')

export default {
  getMovieList: (start = 0, count = 20) => {
    return axios.get(`${config.url}/movie/top250`, {
      params: {
        start,
        count
      }
    }).then(res => res.data.data)
  },
  getMovieDetail: id => {
    return axios.get(`${config.url}/movie/detail`, {
      params: {
        id
      }
    }).then(res => res.data.data)
  }
}
