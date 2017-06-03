<template>
  <!--S=首页模板内容-->
  <div class="container-fluid" style="padding-left: 0;padding-right: 0">
    <div class="col-md-12">
      <!--S=内容展示栏-->
      <div class="col-md-8 index-content">
        <div class="index-board-list col-md-12" style="background-color: red;box-shadow: 0 1px 1px #4FC08D;height: 500px">
          dkk
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

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }


</style>
