<!-- html-->
<template>
  <div class="cartcontrol" v-if="food">
    <div class="cart-decrease" v-show="food.count>0">
      <i class="iconfont icon-minus" @click="minus"></i>
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add">
      <i class="iconfont icon-add" @click="add"></i>
    </div>
  </div>

</template>

<!--js-->
<script>
  import Vue from 'vue';

  export default {

    props: {
      food: {
        type: Object
      }
    },

    data() {
      return {}
    },
    methods: {
      add(event) {

        if (!event._constructed) {
          return;
        }

        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++
        }
        // console.log(event.target)
        this.$emit('add', this.food)
      },
      minus(event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--
        }
        this.$emit('minus', this.food)
      }
    },

    /**
     * 实例被创建之后执行代码
     */
    created: function () {

    },

  }

</script>

<!--css-->
<style lang="stylus">
  .cartcontrol
    display flex
    background-color darkcyan
    .cart-decrease
      color rgb(0, 160, 220)
      padding 5px
    .cart-count
      color #7e8c8d
      margin-left 6px
      margin-right 6px
      padding 5px
    .cart-add
      color rgb(0, 160, 220)
      padding 5px

</style>
