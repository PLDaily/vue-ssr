<template>
  <div class="container">
    <h1>index</h1>
    <pre>
    movieListData = {{JSON.stringify(movieListData, null, 2)}}
    </pre>
  </div>
</template>
<script>
import Vue from 'vue'
import '@/assets/css/index.scss'

export default {
  name: 'Index',
  components: {
  },
  data () {
    return {
      index: true
    }
  },
  asyncData ({store}) {
    return store.dispatch('FETCH_MOVIE_LIST', {
      start: 0,
      count: 20
    })
  },
  title () {
    return 'top250'
  },
  computed: {
    movieListData () {
      return this.$store.state.data
    }
  },
  mounted () {
    console.log('index')
    console.log(this.$store.state)
  },
  methods: {
  }
}
</script>
