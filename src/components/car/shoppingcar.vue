<!-- html-->
<template>
  <div class="shopcar">
    <div class="content">
      <!--左侧内容-->
      <div class="content-left" @click="leftClick">
        <div class="logo-wrapper">
          <div class="logo" :class="{'has-food':foodList.length>0}">
            <i class="iconfont icon-shopping_cart"></i>
          </div>
          <div class="num" v-show="foodList.length>0">{{foodList.length}}</div>
        </div>
        <div class="price">
          price
        </div>
        <div class="desc">
          配送费 3
        </div>
      </div>
      <!--右侧支付-->
      <div class="content-right">
        <div class="pay">
          支付
        </div>
      </div>
      <!--购物车列表-->
      <transition>
        <div class="shopcart-list" v-show="!fold" ref="listContent">

          <ul>
            <li v-for="item in foodList">
              <div class="list-item">
                {{item.name}}
              </div>

            </li>
          </ul>

        </div>
      </transition>

    </div>

  </div>

</template>

<!--js-->
<script>

  export default {

    props: {
      foodList: Array
    },

    data() {
      return {
        fold: true
      }
    },
    methods: {
      leftClick() {
        if (!this.foodList.length) {
          return
        }
        this.fold = !this.fold
      },
      hideList() {
        this.fold = true;
      },
    },
    computed: {
      totalCount() {
        let count = 0
        this.foodList.forEach((food) => {
          count += food.count
        })
        // return count
        return this.foodList.length
      },
      listShow() {

      }
    },

    /**
     * 实例被创建之后执行代码
     */
    created: function () {


    },
  }

</script>

<style lang="stylus" ref="stylesheet/stylus">

  .shopcar
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height 46px
    .content
      display flex
      flex-direction row
      background-color #141d27
      color: rgba(255, 255, 255, 0.4)
      width 100%
      height 100%
      margin 0
      text-align center
      .content-left
        display flex
        width 100%
        background-color: #141d27
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .has-food
            color #f00
          .logo
            display inline-block
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
          .price
            display: inline-block
            vertical-align: top
            margin-top: 12px
            height 48px
            text-align center
            line-height: 24px
            padding-right: 12px
            box-sizing: border-box
            border-right: 1px solid rgba(255, 255, 255, 0.1)
            font-size: 16px
          .desc
            display: inline-block
            vertical-align: top
            margin: 12px 0 0 12px
            line-height: 24px
            font-size: 10px
            font-weight: 700
      .content-right
        width 105px
        .pay
          height 48px
          line-height 48px
          font-size 12px
          text-align center
          background: #00b43c
      .shopcart-list
        position absolute
        left 0
        bottom 46px
        width 100%
        z-index -1
        background-color #7e8c8d
        max-height 217px
        overflow scroll
        .list-item
          padding 5px 0
</style>
