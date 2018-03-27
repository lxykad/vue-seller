import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/goods.vue'
import Comment from '../components/comment/comment.vue'
import Seller from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
 // linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    },
  ]
})
