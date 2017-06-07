<template>
  <!--S=文章显示~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
  <div class="container-fluid" style="padding-left: 0;padding-right: 0">
    <!--S=首页模板内容-->
    <div class="col-md-12">
      <!--S=内容展示栏-->
      <div class="col-md-9 index-content">
        <!--挂载点①：显示获取的信息类型描述-->
        <slot name="archives-type-desc"></slot>
        <div class="index-board-list col-md-12">
          <div
            class="index-board-item col-md-12"
            v-for="(item, index) in Archives"
            :class="['index-board-' + item.id]">
            <div class="index-board-item-inner">
              <h2>
                <span class="write-type" :style="getColor(item.type)">{{ getTypeName(item.type) }}</span>
                <a :href="'/archive/'+item.id">{{ item.title }}</a>
              </h2>
              <p class="article-content">{{ item.description }}</p>
              <div class="index-board-button">
                <router-link class="button pull-right"  :to="{ name: 'archives', params: { id: item.id }}">点击查看</router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isPagination == 1">
          <keep-alive>
            <pagination :url="url" @on-change="changePagination($event)"></pagination>
          </keep-alive>
        </div>
        <div v-else>
          <div class="col-md-12" style="margin-left: 0;padding-left: 0">
            <ul class="pager">
              <li class="next">
                <a :href="url+'2'">下一页 &rarr;</a>
              </li>
            </ul>
          </div>
        </div>
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
  <!--E=文章显示~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
</template>

<script>
  import SideBar from './sidebar'
  import Pagination from './base/pagination'
  export default {
    components: {
      SideBar,
      Pagination
    },
    props: {
      Archives: {
        required: true
      },
      url: {
        required: true
      },
      isPagination: {  //是否分页：1是，0否
        required: true
      }
    },
    created: function () {
      //判断手机端隐藏相关信息
      window.onload = function() {  //手机时隐藏
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
          $(".index-board-button").hide();
        }
      };
    },
    data () {
      return {
      }
    },
    methods: {
      getColor (type) {
        return 'background-color: #'+(type == 0?'67B73C':(type == 1?'337AB3':'A9491C'))
      },
      getTypeName (type) {
        return (type == 0?'原':(type == 1?'转':'译'))
      },
      changePagination (page) {
        this.$emit('on-pagination', parseInt(page));
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
    padding: 20px 20px 5px;
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
    /*padding-left: 120px;*/
  }
  .index-board-item-inner h2 a{
    color: #000;
    text-decoration: none;
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
  .index-board-button a {
    text-decoration: none;
  }

  .write-type {
    margin-right: 10px;background-color: #67B73C;color: white;font-size: 14px;padding: 2px 2px 1px 2px
  }

  .article-content {
    font-size: 12px;
    color: #888;
    font-family: 'Microsoft YaHei',serif;
  }

  .pager .next {
    cursor: pointer;
  }
</style>
