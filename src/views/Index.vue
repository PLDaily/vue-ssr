<template>
  <div class="container">
    <list v-for="(data, index) in movieListData.subjects" :key="index" :data="data" />
  </div>
</template>
<script>
import Vue from 'vue'
import '@/assets/css/index.scss'
import List from '@/components/List'

export default {
  name: 'Index',
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
    return this.movieListData.title
  },
  components: {
    List
  },
  computed: {
    movieListData () {
      return this.$store.state.list
    }
  }
}
</script>
