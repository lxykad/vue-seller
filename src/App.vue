<template>
  <div id="app">
    <v-head v-bind:seller="seller"></v-head>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods" active-class="active">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/comment" active-class="active">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" active-class="active">商家</router-link>
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import axios from 'axios'
  import Head from './components/head/head.vue'

  export default {
    //   name: 'App',
    // 导出组件
    components: {
      'v-head': Head,

    },

    data() {
      return {
        goods: [],
        ratings: [],
        seller: {}
      }
    },
    methods: {},

    created() {
      axios.get('http://192.168.0.183:8080/static/data.json')
        .then(res => {
          // console.log(res.data.seller)
          this.goods = res.data.goods;
          this.ratings = res.data.ratings;
          this.seller = res.data.seller;

        })
        .catch(err => {
          console.log(err)
        })
    }
  }
</script>


<style>

  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid #000000;
  }

  .tab-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: rgb(77, 85, 93);

  }

  .active {
    color: rgb(240, 20, 20);
    font-size: 16px;
  }

</style>
