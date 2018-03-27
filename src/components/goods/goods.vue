<!-- html-->
<template>
  <div class="container">
    <div class="menu-wrapper">
      left
    </div>

    <div class="content-wrapper2">
      right
    </div>

  </div>

</template>

<!--js-->
<script>
  export default {

    data() {
      return {
        a: 1
      }
    },
    methods: {
      click() {
        this.a++
      }
    },
    watch: {
      a: function (value, oldValue) {

      }
    },

    /**
     * 实例被创建之后执行代码
     */
    created: function () {

      console.log('goods created')
    },

    destoryed: function () {
      console.log('goods destoryed')
    },

  }

</script>

<!--css-->
<style>
  .container {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 179px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;

  }

  .menu-wrapper {
    width: 100px;
    background-color: #7e8c8d;

  }

  .content-wrapper2 {
    width: 100%;
    background-color: aquamarine;

  }

</style>
