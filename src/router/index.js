import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Detail = () => import('../views/Detail.vue')
const Index = () => import('../views/Index.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/detail/:movieId',
        name: 'Detail',
        component: Detail
      },
      {
        path: '/',
        name: 'Index',
        component: Index
      }
    ]
  })
}
