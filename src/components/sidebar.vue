<template>
    <!--S=侧边栏-->
    <div class="col-md-3 index-sidebar" >
      <div class="index-left-block">
        <h2>近期文章</h2>
        <ul>
          <li v-for="item in newArchives">
            <router-link :to="{ name: 'archives', params: { id: item.id }}">
              {{ item.name }}
            </router-link>
            <span v-if="item.hot" class="hot-tag">HOT</span>
          </li>
        </ul>
      </div>
      <div class="index-left-block">
        <h2>分类目录</h2>
        <ul>
          <li v-for="item in archiveType">
            <router-link :to="{ name: 'archivesCategory', params: { id: item.id }}">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="index-left-block">
        <h2>文章归档</h2>
        <ul>
          <li v-for="item in archiveDate">
            <router-link :to="{ name: 'archivesCategory', params: { id: item.id }}">
              {{ (item.date.split("-"))[0] }} 年 {{ (item.date.split("-"))[1] }}月
            </router-link>
          </li>
        </ul>
      </div>
      <div class="index-left-block">
        <h2>功能</h2>
        <ul>
          <li><a href="">RSS订阅</a></li>
          <li><a href="">站点地图</a></li>
          <li><a href="">联系我~~</a></li>
        </ul>
      </div>
      <div class="index-left-block">
        <h2>友链</h2>
        <ul>
          <li><a href="http://blog.csdn.net/qq_28666081">My csdn博客</a></li>
          <li><a href="https://cn.vuejs.org/">Vuejs手册</a></li>
          <li><a href="laravelacademy.org">Laravel学院</a></li>
        </ul>
      </div>
    </div>
    <!--E=侧边栏-->
</template>

<script>
  export default {
    created: function () {
      this.$http.get('/api/getNewsList')
        .then((res) => {
        this.newsList = res.data;
      }, (err) => {
        console.log(err);
      })
      //最新文章
      this.$http.get('/api/getNewArchives')
        .then((res) => {
        this.newArchives = res.data;
        console.log(res.data)
      }, (err) => {
        console.log(err);
      })
      //文章类型
      this.$http.get('/api/getArchiveType')
        .then((res) => {
        this.archiveType = res.data;
        console.log(res.data)
      }, (err) => {
        console.log(err);
      })
      //日期归档
      this.$http.get('/api/getArchiveDate')
        .then((res) => {
        this.archiveDate = res.data;
      console.log(res.data)
    }, (err) => {
        console.log(err);
      })

    },
    data () {
      return {
        archiveType:[],
        archiveDate:[],
        newsList: [],
        newArchives: []
      }
    }
  }
</script>

<style scoped>
  .index-sidebar {
    padding-left: 0
  }

  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
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


  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }


  .lastest-news {
    /*min-height: 512px;*/
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

  .new-item {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ul li a {
    text-decoration: none;
  }
</style>
