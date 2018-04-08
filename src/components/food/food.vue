<template>
  <div class="container">
    <button @click="back">返回</button>
    <p>{{food.name}}</p>
  </div>


</template>

<script>
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
      back(event) {
        if (!event._constructed) {
          console.log('return')
          // return;
        }

        this.$emit('back')
      }
    },
    created: function () {

    },

  }

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

</style>
