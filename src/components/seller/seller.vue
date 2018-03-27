<!-- html-->
<template>
    <div>seller</div>

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

            console.log('seller created')
        },


    }

</script>

<!--css-->
<style>

</style>
