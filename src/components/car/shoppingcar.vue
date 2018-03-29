<!-- html-->
<template>
  <div class="shopcar">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="iconfont icon-arrow"></i>
          </div>
          <div class="num">0</div>
        </div>
        <div class="price">
          price
        </div>
        <div class="desc">
          配送费
        </div>
      </div>
      <div class="content-right">
        right
      </div>
    </div>
  </div>

</template>

<!--js-->
<script>

  export default {

    data() {
      return {

      }
    },
    methods: {
      click() {

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
      .content-left
        display flex
        width 100%
        background-color: #141d27
        .logo-wrapper
          display flex
          .logo
            width 100%
            height 100%
            border-radius 50%


      .content-right
        width 105px
        background-color #f1d1f1

</style>
