<template>
  <div class="container-fluid" style="padding-left: 0;padding-right: 0">
      <!--S=内容展示栏-->
      <div class="col-md-9 index-content" style="margin-top: 15px">
          <ul class="timeline">
            <li  v-for="(item, key, index) in allDates" :class="(index%2==0?'alt':'')">
              <div class="time">lisam&nbsp;归档</div>
              <div class="version">{{ key }}&nbsp;年</div>
              <div class="number">{{ index+1 }}</div>
              <div class="content">
                <pre>
                  <div v-for="(item2, index) in item"
                  ><a :href="'/archives/date/'+item2.date_url" class="month pull-left"
                  >-&nbsp;{{ item2.date.split("-")[0]+"-"+item2.date.split("-")[1] }}</a>|<a
                    class="month-latest-archive" :href="'/archive/'+item2.archive_id">本月最新：{{ item2.latest_archive }}</a></div>
                </pre>
              </div>
            </li>
          </ul>
          <div style="margin-left:180px;">
            <button id="fetchNextData" class="btn btn-large btn-info" onclick="window.location.href='/'" style="width:100%;">
              点击跳回首页</button>
          </div>
      </div>
      <!--E=内容展示栏-->
      <!--S=侧边栏-->
      <keep-alive>
        <side-bar></side-bar>
      </keep-alive>
      <!--E=侧边栏-->
  </div>
</template>

<script>
  import SideBar from '../components/sidebar'
  export default {
    components: {
      SideBar
    },
    created: function () {
      this.$http.get('/api/getAllDates')
        .then((res) => {
        this.allDates = res.data;
      }, (err) => {
        console.log(err);
      })
    },
    data () {
      return {
        allDates: {}
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  @import '../assets/date/bootstrap-responsive.css';
  ul.timeline li {
    position: relative;
    margin-bottom: 20px;
  }

  ul.timeline li .time {
    position: absolute;
    width: 90px;
    text-align: right;
    left: 0;
    top: 10px;
    color: #999;
  }

  ul.timeline li .version {
    position: absolute;
    width: 290px;
    text-align: right;
    left: -200px;
    top: 30px;
    font-size: 20px;
    line-height: 50px;
    color: #3594cb;
    overflow: hidden;
  }

  ul.timeline li .number {
    position: absolute;
    background: url("http://fineui.com/res/img/version_dot.png") no-repeat scroll 0 0 transparent;
    width: 56px;
    height: 56px;
    left: 97px;
    line-height: 56px;
    text-align: center;
    color: #fff;
    font-size: 18px;
  }

  ul.timeline li.alt .number {
    background-image: url("http://fineui.com/res/img/version_dot_alt.png");
  }

  ul.timeline li .content {
    margin-left: 180px;
  }

  ul.timeline li .content pre {
    background-color: #3594cb;
    color: #fff;
    font-size: 13px;
    margin-top: 0;
    padding: 0;
  }

  ul.timeline li.alt .content pre {
    background-color: #43B1F1;
  }

  .month {
    color: white;
    cursor: pointer;
    text-decoration: none;
    margin-top: 0;
    padding: 0;
    display: block;
    margin-left: 20px;
    margin-right: 20px;
  }

  .month-latest-archive {
    color: white;
    cursor: pointer;
    margin-left: 20px;
    font-size: 12px;
    text-decoration: none;
  }
</style>
