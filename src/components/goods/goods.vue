<!-- html-->
<template>
  <div>
    <div class="goods">
      <div class="container">
        <!-- 左侧菜单-->
        <div class="menu-wrapper" ref="menuWrapper">
          <ul>
            <li v-for="(item,index) in goods" :key="index" :class="{'current':currentIndex===index}"
                @click="menuClick(index,$event)">
              <span class="left-item">{{item.name}}</span>
            </li>
          </ul>
        </div>

        <!--右侧内容列表-->
        <div class="content-wrapper2" ref="contentWrapper">

          <ul>
            <li v-for="(item,index) in goods" :key="index" ref="foodList">
              <h1 class="title">{{item.name}}</h1>
              <ul>

                <li v-for="(food,index) in item.foods" @click="foodClick(food)">

                  <div class="food-item">
                    <div>
                      <img v-bind:src="food.image" width="64" height="64"/>
                    </div>

                    <div class="food-desc">
                      <h2>
                        {{food.name}}
                      </h2>
                      <p>
                        {{food.description}}
                      </p>
                      <div>
                        <span>月售{{food.sellCount}}份</span>
                        <span>好评率{{food.rating}}%</span>
                      </div>
                      <div class="price-wrapper">
                      <span>
                        售价{{food.price}}元
                      </span>
                        <i class="iconfont icon-arrow" @click="addFood(food)">

                        </i>
                      </div>
                      <div class="car-control">
                        <v-control :food="food" v-on:add="foodAdd($event)" v-on:minus="foodMinus($event)"></v-control>
                      </div>
                    </div>

                  </div>

                </li>

              </ul>
            </li>
          </ul>
          <v-control></v-control>
        </div>

      </div>
      <!--底部购物车-->
      <v-car class="car" :foodList="addList">car</v-car>
    </div>
    <!--商品详情页-->
    <food class="food-detail" :food="selectedFood" v-on:back="hidenFood($event)" v-show="foodShow"></food>
  </div>

</template>

<!--js-->
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import ShoppingCar from '../car/shoppingcar.vue'
  import CarControl from '../carcontrol/carcontrol.vue'
  import food from '../food/food.vue'

  export default {

    // 导出组件
    components: {
      'v-car': ShoppingCar,
      'v-control': CarControl,
      food
    },

    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {},
        addList: [],
        foodShow: false
      }
    },
    computed: {

      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            // this._followScroll(i);
            return i;
          }
        }
        return 0;
      }

    },
    methods: {
      addFood(food) {
        console.log(food.name)
      },
      _initScroll() {

        this.foodsScroll = new BScroll(this.$refs.contentWrapper, {
          click: true,
          probeType: 3
        })
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.foodsScroll.on('scroll', (prop) => {
          // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
          if (prop.y <= 0) {
            this.scrollY = Math.abs(Math.round(prop.y));
          }
        })
      },
      _calculateHeight() {
        let foodList = this.$refs.foodList;
        let height = 0;
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height);
        }
      },
      menuClick(index, event) {

        if (!event._constructed) {
          return;
        }
        let foodList = this.$refs.foodList;
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      /*
       子组件传进来的事件
      * */
      foodAdd(food) {
        this.addList.push(food)
      },
      foodMinus(food) {
        // this.delFood(food)
        this.addList.pop(food)
      },
      delFood(food) {
        this.addList.forEach((item) => {
          if (item.name === food.name) {
            let index = this.addList.indexOf(item)
            this.addList.splice(index, 1)
          }

        })
      },
      foodClick(food) {
        this.selectedFood = food
        this.foodShow = true
      },
      /*
      * 子组件传进来的事件
      * */
      hidenFood(){
        this.foodShow = false
      }

    },

    /**
     * 实例被创建之后执行代码
     */
    created: function () {

      axios.get('http://192.168.0.183:8080/static/data.json')
        .then(res => {
          this.goods = res.data.goods;
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })

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

  /*
    一个比较坑的问题，content-wrapper 无法滑动
  */
  .content-wrapper2 {
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
    border-bottom: solid 1px #7e8c8d;
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
  }

  .current {
    background-color: darkcyan;
  }

  .car-control {
    position: relative;
    right: 0;
    top: 6px;
    bottom: 12px;
  }

  .food-detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

</style>
