<template>
  <!--S=首页模板内容-->
  <div class="container-fluid" style="padding-left: 0;padding-right: 0">
    <div class="col-md-12">
      <!--S=内容展示栏-->
      <div class="col-md-9 index-content">
        <div class="index-board-list col-md-12">
          <div
            class="index-board-item col-md-12"
            v-for="(item, index) in Archives"
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
        <!--S=分页-->
        <keep-alive>
          <pagination url="/page/"></pagination>
        </keep-alive>
        <!--E=分页-->
      </div>
      <!--E=内容展示栏-->
      <!--S=侧边栏-->
      <keep-alive>
        <side-bar></side-bar>
      </keep-alive>
      <!--E=侧边栏-->
    </div>
  </div>
  <!--E=首页模板内容-->
</template>

<script>
  import SideBar from '../components/sidebar'
  import Pagination from '../components/base/pagination'
  export default {
    components: {
      SideBar,
      Pagination
    },
    created: function () {
      //获取初始文章信息
      this.$http.get('/api/getArchives')
        .then((res) => {
        this.Archives = res.data;
       }, (err) => {
        console.log(err);
      })
      //分页获取文章
      this.$http.get('/api/getPagination?num='+this.page)
        .then((res) => {
        this.Archives = res.data;
      }, (err) => {
        console.log(err);
      })
    },
    data () {
      return {
        invTime: 2000,
        Archives: [],
        page:  this.$route.params.num
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
