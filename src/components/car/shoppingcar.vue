<!-- html-->
<template>
  <div class="shopcar">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="iconfont icon-shopping_cart"></i>
          </div>
          <div class="num">1</div>
        </div>
        <div class="price">
          price
        </div>
        <div class="desc">
          配送费 3
        </div>
      </div>
      <div class="content-right">
        <div class="pay">
          支付
        </div>
      </div>
    </div>
  </div>

</template>

<!--js-->
<script>

  export default {

    data() {
      return {}
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
</style>
