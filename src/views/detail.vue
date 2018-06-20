<template>
  <div class="detail">
    <img :src="movieDetailData.images.large" />
    <div>影名: {{movieDetailData.title}}</div>
    <div>评分: {{movieDetailData.rating.average}}</div>
    <div>{{movieDetailData.summary}}</div>
  </div>
</template>
<script>
import Vue from 'vue'
import '@/assets/css/detail.scss'

export default {
  name: 'Detail',
  asyncData ({store, route: {params: {movieId}}}) {
    return store.dispatch('FETCH_MOVIE_DETAIL', {
      movieId
    })
  },
  title () {
    return this.movieDetailData.title
  },
  computed: {
    movieDetailData () {
      return this.$store.state.data
    }
  }
}
</script>
