<template>
  <!--S=首页模板内容-->
  <div class="container-fluid" style="padding-left: 0;padding-right: 0">
    <div class="col-md-12">
      <div class="col-md-9 index-content">
        <!--S=内容展示栏-->
        <div class="index-board-list col-md-12" id="content">
          <h4 style="margin: 0 0 0 0;padding: 0 0 0 0;font-weight:bolder;">{{ archive.title }}</h4>
          <div class="parting-line">&nbsp;</div>
          <div class="archive-author"><span><span class="glyphicon glyphicon-calendar">
          </span>{{ created_date }}
          </span>&nbsp;<span><i class="icon-bar"></i>
            <span class="glyphicon glyphicon-user"></span>{{ archive.author }}</span>
          </div>
          <div class="archive-content">
            <!--S=文章内容-->
            <div class="archive-main-content"><div v-html="archive.content"></div></div>
            <!--E=文章内容-->
            <div class="parting-line">&nbsp;</div>
            <!--S=分享按钮-->
            <div class="baidu-share">
              <keep-alive>
                <share-btn></share-btn>
              </keep-alive>
            </div>
            <!--E=分享按钮-->
            <!--S=标签-->
            <div class="archive-tag">
              <span class="glyphicon glyphicon-tag"></span>
              <span v-for="(item,index) in archive.tags">
                <router-link :to="{ name: 'archivesCategory', params: { id: item.id }}">
                  <span v-if="index != 0">,</span>
                  {{ item.name }}
                </router-link>
              </span>
            </div>
            <!--E=标签-->
            <div class="parting-line">&nbsp;</div>
            <!--S=其他文章-->
            <div class="archive-change">
              <a href="javascript:void(0)" @click="prevArchive" class="prev-page">
                <span class="glyphicon glyphicon-menu-left"></span>
                {{ archive.prevPage.title }}</a>
              <a href="javascript:void(0)" @click="nextArchive" class="next-page"> {{ archive.nextPage.title }}
                <span class="glyphicon glyphicon-menu-right"></span></a>
            </div>
            <!--E=其他文章-->
          </div>
        </div>
        <!--E=内容展示栏-->
        <!--S=评论-->
        <keep-alive>
          <comment></comment>
        </keep-alive>
        <!--E=评论-->
      </div>
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
  import ShareBtn from '../components/base/shareBtn'
  import Comment from '../components/comment'
  export default {
    components: {
      SideBar,
      ShareBtn,
      Comment
    },
    created: function () {
      this.$http.get('/api/getArchive')
        .then((res) => {
        this.archive = res.data;
        this.pArchive = res.data.prevPage;
        this.nArchive = res.data.nextPage;
       }, (err) => {
        console.log(err);
      })
    },
    data () {
      return {
        archive: {},
        pArchive:{},
        nArchive:{}
      }
    },
    computed: {
      //处理创建文章的时间格式
      created_date () {
        return (this.archive.created_at).split("-")[0]+"年"
          +(this.archive.created_at).split("-")[1]+"月"
          +(this.archive.created_at).split("-")[2]+"日";
      }
    },
    methods: {
      //上一篇
      prevArchive () {
        window.location.href = '/archive/'+this.pArchive.id
      },
      //下一篇
      nextArchive () {
        window.location.href = '/archive/'+this.nArchive.id
      }
    }
  }

</script>

<style scoped>
  .index-content {
    margin-top: 15px;
    padding-right: 0
  }

  #content {
    box-shadow: 0 1px 1px #4FC08D;padding: 5px 10px 5px 10px;
  }

  .index-content .index-board-list {
    padding-left: 1px;padding-top: 1px
  }


  .archive-content {
    color: #555555;
    font-family: Verdana,"BitStream vera Sans",Tahoma,Helvetica,Sans-serif,serif;
    text-decoration: none;
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

  .parting-line {
    border: none;border-bottom: 1px solid #eeeeee;height: 1px;
    clear: both;
  }
.archive-tag,.archive-change a {
  color: #2970A6;
  font-size: 12px;
  font-family: Verdana,"BitStream vera Sans",Tahoma,Helvetica,Sans-serif,serif;
  text-decoration: none;
  margin-bottom: 8px;
}
.archive-change {
  clear:both;margin-top: 5px
}
.archive-change .prev-page{
    float: left;
  }
  .archive-change .next-page{
    float: right;
  }
  .archive-main-content{
    padding-top: 10px;
  }
</style>
