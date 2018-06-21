import Vue from 'vue'

export default {
  SET_LIST_DATA: (state, { data }) => {
    state.list = data
  },
  SET_DETAIL_DATA: (state, { data }) => {
    state.detail = data
  }
}
