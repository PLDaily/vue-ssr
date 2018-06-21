import Vue from 'vue'
import api from '@/api/api'

export default {
  FETCH_MOVIE_LIST: ({ commit }, { start, count }) => {
    return api.getMovieList(start, count).then(data => {
      commit('SET_LIST_DATA', { data })
    })
  },
  FETCH_MOVIE_DETAIL: ({ commit }, { movieId }) => {
    return api.getMovieDetail(movieId).then(data => {
      commit('SET_DETAIL_DATA', { data })
    })
  }
}
