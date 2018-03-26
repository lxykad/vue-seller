<!-- html-->
<template>
  <div class="header">
    <div>
      <img width="64" height="64" :src="seller.avatar">
      <span>{{seller.name}}</span>

      <span>{{seller.bulletin}}</span>
    </div>

  </div>

</template>

<!--js-->
<script>
  export default {

    // 外部传进来的对象
    props: {
      seller: {
        type: Object
      }
    },

    data() {
      return {
      }
    },
    methods: {
    },

    /**
     * 实例被创建之后执行代码
     */
    created: function () {
      // console.log(this.seller.avatar)
    },

  }

</script>

<!--css-->
<style>

</style>
