import axios from 'axios'
const config = require('../../config.js')

export default {
  getMovieList: (start = 0, count = 20) => {
    return axios.request({
      baseURL: config.apiurl,
      url: '/movie/top250',
      params: {
        start,
        count
      },
      method: 'get'
    }).then(res => res.data).catch(err => {
      console.error(`请求getMovieList数据失败，错误${err.response.status}，${err.response.statusText}`)
    })
  },
  getMovieDetail: id => {
    return axios.request({
      baseURL: config.apiurl,
      url: `/movie/subject/${id}`,
      method: 'get'
    }).then(res => res.data).catch(err => {
      console.log(err)
      console.error(`请求getMovieDetail数据失败，错误${err.response.status}，${err.response.statusText}`)
    })
  }
}
