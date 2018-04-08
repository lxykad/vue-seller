<!-- html-->
<template>
  <div class="header">
    <div class="content-wrapper">
      <div>
        <img class="avatar" :src="seller.avatar">
      </div>
      <div class="content">

        <span>{{seller.name}}</span>
        <span>{{seller.description}}</span>
        <div v-if="seller.supports">
          {{seller.supports[0].description}}
        </div>

        <!--support count-->
      </div>
      <div v-if="seller.supports" class="support" @click="showSupport">
        <div class="support-content">
          <div>{{seller.supports.length}}个</div>
          <i class="iconfont icon-minus"></i>
        </div>

      </div>

    </div>

    <!--底部描述-->
    <div class="bulletin-wrapper">
      {{seller.bulletin}}
    </div>

    <div class="support-detail" v-show="showSup" ref="detailWrapper">

      <div class="detail-content">
        <ul>
          <li v-for="(item,index) in detail" class="item">
            {{item}}
          </li>
        </ul>

      </div>
      <div class="detail-footer">
        <i class="iconfont icon-add" @click="showSupport"></i>
      </div>

    </div>

  </div>

</template>

<!--js-->
<script>
  import BScroll from 'better-scroll'

  export default {

    // 外部传进来的对象
    props: {
      seller: {
        type: Object
      }
    },

    data() {
      return {
        showSup: false,
        detail: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    methods: {
      showSupport() {
        this.showSup = !this.showSup
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
<style>
  .header {
    position: relative;
    overflow: hidden;
    background-color: rgba(7, 17, 27, 0.5);
    color: #fff;
  }

  .content-wrapper {
    display: flex;
    padding: 24px 12px 18px 24px;
    font-size: 14px;
  }

  .avatar {
    width: 64px;
    height: 64px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5px;
  }

  .support {
    position: absolute;
    right: 12px;
    bottom: 50px;
    padding-left: 8px;
    height: 24px;
    line-height: 24px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 14px;
  }

  .support-content {
    display: flex;
    flex-direction: row;
    margin-right: 8px;
  }

  .support-detail {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    top: 0;
    left: 0;
    overflow: scroll;
  }

  .detail-content {
    flex: 1;
    overflow: scroll;
  }

  .detail-footer {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  .item {
    height: 100px;
  }

  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);

  }


</style>
