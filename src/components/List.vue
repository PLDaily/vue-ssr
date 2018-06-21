<template>
  <router-link class="list" :to="'/detail/' + data.id">
    <div class="image">
      <img :src="data.images.large" />
    </div>
    <div class="content">
      <h1>{{data.title}}</h1>
      <div class="rating">豆瓣评分: <span>{{data.rating.average}}</span></div>
    </div>
  </router-link>
</template>
<script>
import '@/assets/css/list.scss'
export default {
  name: 'List',
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
}
</script>
