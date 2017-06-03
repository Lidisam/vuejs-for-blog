<template>
  <!--S=首页模板内容-->
  <div class="container-fluid" style="padding-left: 0;padding-right: 0">
    <div class="col-md-12">
      <!--S=内容展示栏-->
      <div class="col-md-8 index-content">
        <div class="index-board-list col-md-12">
          <div
            class="index-board-item col-md-12"
            v-for="(item, index) in boardList"
            :class="['index-board-' + item.id]">
            <div class="index-board-item-inner">
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
              <div class="index-board-button">
                <router-link class="button" :to="{path: 'detail/' + item.toKey}">点击查看</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--E=内容展示栏-->
      <!--S=侧边栏-->
      <side-bar></side-bar>
      <!--E=侧边栏-->
    </div>
  </div>
  <!--E=首页模板内容-->
</template>
<script>
  import SideBar from '../components/sidebar'
  export default {
    components: {
      SideBar
    },
    created: function () {
    },
    data () {
      return {
        invTime: 2000,
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ],
      }
    }
  }
</script>

<style scoped>
  .index-content {
    margin-top: 15px;
    padding-right: 0
  }

  .index-content .index-board-list {
    padding-left: 1px;padding-top: 1px
  }

  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }

  .index-left-block .hr {
    margin-bottom: 20px;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {

    padding: 2px 15px;
  }

  .index-left-block li {
    padding: 2px;
  }

  .index-board-list {
    overflow: hidden;
  }

  .index-board-item {
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }

  .index-board-item:hover {
    transform: scale(1.02);
    -ms-transform: scale(1.02);
    -webkit-transform: scale(1.02);
    -moz-transform: scale(1.02);
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-car .index-board-item-inner {
    background: url(../assets/images/1.png) no-repeat;
  }

  .index-board-loud .index-board-item-inner {
    background: url(../assets/images/2.png) no-repeat;
  }

  .index-board-earth .index-board-item-inner {
    background: url(../assets/images/3.png) no-repeat;
  }

  .index-board-hill .index-board-item-inner {
    background: url(../assets/images/4.png) no-repeat;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }


  .index-board-button {
    margin-top: 20px;
  }

</style>
