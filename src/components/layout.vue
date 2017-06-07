<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <div class="text-center">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#example-navbar-collapse">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link :to="{path: '/'}">
              <img src="../assets/logo.png" style="float: left;width: 25px;height:25px">
            </router-link>
          </div>
          <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a href="/">首页</a></li>
              <li><a href="/date">归档日志</a></li>
              <li><a href="#"><i class="icon-coffee"></i>聊天室</a></li>
              <li>
                <form class="navbar-form navbar-left" role="search" action="/">
                  <div class="form-group">
                    <input type="text" name="keyword" class="form-control" id="search-key"
                           placeholder="输入文章名/作者名/内容信息"><button type="submit" class="btn btn-default" id="search-btn">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"></span>搜索
                  </button>
                  </div>
                </form>
              </li>
              <li @click="aboutClick" class="login" style="right: 0;position: absolute">
                <a>关于我</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="app-content">
      <!--S=包裹其他视图:并保存单页面应用-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!--E=包裹其他视图:并保存单页面应用-->
    </div>
    <div class="app-foot">
      <p>版权所有 © 2017 (Lisam)的博客</p>
    </div>
    <my-dialog :is-show="isShowAboutDialog" :size="{width: '96%',left: '2%',top: '10%','max-height': '80%'}"
               @on-close="closeDialog('isShowAboutDialog')">
      <div class="container-fluid">
        详情在此填写您的个人信息
      </div>
    </my-dialog>
    <!--S=回到顶部按钮-->
    <keep-alive>
      <back-top></back-top>
    </keep-alive>
    <!--E=回到顶部按钮-->

  </div>
</template>

<script>
import Dialog from '../components/base/dialog'
import BackTop from '../components/base/backTop'
export default {
  components: {
    MyDialog: Dialog,
    BackTop
  },
  created: function () {
    document.title = "Lisam网络日志";
    $("html").append('<meta name ="viewport"  content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />')
  },
  data () {
    return {
      isShowAboutDialog: false
    }
  },
  methods: {
    aboutClick () {
      this.isShowAboutDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.navbar-header {
  background-color: #363636;
}
a {
  color: inherit;
  text-decoration: none;
}

#example-navbar-collapse {
  margin-left: 50px;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
  display: flex;
  min-height: 100%;
  flex-direction: column;
}
.app-head {
  background: #363636;
  /*color: #b2b2b2;*/
  /*height: 90px;*/
  /*line-height: 90px;*/
  /*width: 100%;*/
}

.app-content {
  padding-bottom:100px;
  flex: 1;
}
.app-head-inner {
  /*width: 1200px;*/
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 12px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}

html{height:100%;margin-bottom: 0;padding-bottom: 0}
body{min-height:100%;margin:0;padding:0;position:relative;}
.app-foot {
  /*采用了flex布局即可去掉这个https://xxxgitone.github.io/2017/05/27/FlexBox弹性布局基本用法 */
  position:absolute;bottom:0;width:100%;
  height:20px;
  background-color: #f0f2f5;
  text-align: right;
  padding-right: 2px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.navbar-nav li a {
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}

#search-key {
  border-left: none;border-top-right-radius: 0;-webkit-border-top-right-radius:0;-webkit-border-bottom-right-radius:0;
  border-bottom-right-radius: 0;border-right: 0;
}

#search-btn {
  border-left: none;border-top-left-radius: 0;-webkit-border-top-left-radius:0;-webkit-border-bottom-left-radius:0;
  border-bottom-left-radius: 0;margin-left: 0;padding-top: 7px;
}
.icon-bar {
  background-color: #ffffff;
}
</style>
