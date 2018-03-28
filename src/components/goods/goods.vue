<!-- html-->
<template>
  <div class="goods">

    <div class="container">
      <!-- 左侧菜单-->
      <div class="menu-wrapper">
        <ul v-for="(item,index) in goods" :key="index">
          <li>
            <span class="left-item">{{item.name}}</span>
          </li>
        </ul>
      </div>

      <!--右侧内容列表-->
      <div class="content-wrapper">
        <ul style="width: 100%">
          <li v-for="(item,index) in goods" :key="index">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="(food,index) in item.foods">
                <div class="food-item">
                  <img v-bind:src="food.image" class="food-img"/>
                  <div class="food-desc">
                    <div>
                      {{food.name}}
                    </div>
                    <div>
                      {{food.description}}
                    </div>
                    <div>
                      月售{{food.sellCount}}份
                      好评率{{food.rating}}%
                    </div>
                    <div class="price-wrapper">
                      <span>
                        售价{{food.price}}元
                      </span>
                      <i class="iconfont icon-arrow" @click="addFood(food)">

                      </i>
                    </div>

                  </div>

                </div>

              </li>

            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!--底部购物车-->
    <div class="car">car</div>

  </div>

</template>

<!--js-->
<script>
  import axios from 'axios'

  export default {

    data() {
      return {
        goods: []
      }
    },
    methods: {
      addFood(food) {
        console.log(food.name)
      }
    },

    /**
     * 实例被创建之后执行代码
     */
    created: function () {

      axios.get('http://localhost:8080/static/data.json')
        .then(res => {
          this.goods = res.data.goods;


        })
        .catch(err => {
          console.log(err)
        })
    },

  }

</script>

<!--css-->
<style scoped>
  .goods {
    display: flex;
    flex-direction: column;
  }

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
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    overflow: hidden;

  }

  .content-wrapper {
    width: 100%;
    padding: 0;
    overflow: hidden;

  }

  .left-item {
    display: table-cell;
    width: 56px;
    height: 54px;
    vertical-align: middle;
    font-size: 12px;
    padding: 0 12px;
    line-height: 14px;
  }

  .title {
    padding-left: 14px;
    height: 26px;
    width: 100%;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    olor: rgb(147, 153, 159);
    background: #f3f5f7;
  }

  .food-img {
    width: 64px;
    height: 64px;
  }

  .food-item {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: solid 1px #7e8c8d;
  }

  .food-desc {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 100%;
    color: #07111b;

  }

  .price-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .car {
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 46px;
    width: 100%;
    background-color: darkcyan;
  }


</style>
