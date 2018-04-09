<template>
  <transition name="move">

    <div class="container" v-show="showFlag">
      <button @click="back">返回</button>
      <p>{{food.name}}</p>
    </div>
  </transition>

</template>

<script>
  export default {

    props: {
      food: {
        type: Object
      }
    },

    data() {
      return {
        showFlag: false,
      }
    },
    methods: {

      back(event) {
        if (!event._constructed) {
          console.log('return')
          // return;
        }

        this.$emit('back')
        this.showFlag = false
      },

      show() {
        console.log('show')
        this.showFlag = true
      }
    },
    created: function () {

    }

  }

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .move-enter-active, .move-leave-active {
    transition: all 0.2s linear
  }

  .move-enter, .move-leave-active {
    transform: translate3d(100%, 0, 0)
  }


</style>
