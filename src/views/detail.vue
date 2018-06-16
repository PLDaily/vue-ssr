<template>
  <div class="container">
    <h1>detail</h1>
    <pre>
    movieDetailData = {{JSON.stringify(movieDetailData, null, 2)}}
    </pre>
  </div>
</template>
<script>
import Vue from 'vue'
import '@/assets/css/detail.scss'

export default {
  name: 'Detail',
  components: {
  },
  data () {
    return {
      detail: true
    }
  },
  asyncData ({store, route: {params: {movieId}}}) {
    return store.dispatch('FETCH_MOVIE_DETAIL', {
      movieId
    })
  },
  title () {
    return 'detail'
  },
  computed: {
    movieDetailData () {
      return this.$store.state.data
    }
  },
  mounted () {
    console.log('detail')
    console.log(this.$store.state)
  },
  methods: {
  }
}
</script>
