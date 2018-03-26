<template>
  <div id="app">
    <v-head></v-head>

    <div class="tab">
      <div class="tab-item" v-on:click="tabClick">商品</div>
      <router-link class="tab-item" to="/seller">商家</router-link>
      <router-link class="tab-item" to="/comment">评论</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import Head from './components/head/head.vue'


  export default {
    //   name: 'App',
    // 导出组件
    components: {
      'v-head': Head
    },

    data() {
      return {
        goods: [],
        ratings: [],
        seller: ''
      }
    },
    methods: {
      tabClick(event) {
        // console.log(event)
        this.$router.push('/goods')
      }
    },

    created() {
      axios.get('http://localhost:8080/static/data.json')
        .then(res => {
          // console.log(res.data.seller)
          this.goods = res.data.goods;
          this.ratings = res.data.ratings;
          // this.seller = rea.data.seller;
        })
        .catch(err => {
          console.log(err)
        })


    }
  }
</script>


<style>

  #app
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    flex-direction: row;
    justify-content: space-around;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

</style>
