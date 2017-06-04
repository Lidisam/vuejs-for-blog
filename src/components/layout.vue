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
              <li><a href="/detail">详情</a></li>
              <li><a href="#"><i class="icon-coffee"></i>聊天室</a></li>
              <li><a href="/orderList">订单列表</a></li>
              <li>
                <form class="navbar-form navbar-left" role="search" action="./search.html">
                  <div class="form-group">
                    <input type="text" class="form-control" id="search-key" placeholder="输入文章名/作者名/内容信息"
                    ><button type="submit" class="btn btn-default" id="search-btn">
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
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>
        <br/>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">李迪山</span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">求职目标：</span>PHP<span style="font-family:宋体">开发工程师</span></span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">求职地点：广东省广州市</span>/<span style="font-family:宋体">深圳市</span></span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14px">&nbsp;</span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">个人信息：</span>22<span style="font-family:宋体">岁</span></span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px">15089271488</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <a href="http://undefined"><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(0, 0, 255)">364362035@qq.com</span></span></a>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <a href="http://undefined"><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(0, 0, 255)">https://github.com/Lidisam</span></span></a>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <a href="http://undefined"><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(0, 0, 255)">http://blog.csdn.net/qq_28666081</span></span></a>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px">&nbsp;</span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">在校社团：</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px">2015.09-2016.07</span> <span style=";font-family:宋体;font-size:14px">iHat<span style="font-family:宋体">工作室</span></span> <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">工作室负责人及</span>Web<span style="font-family:宋体">组组长</span></span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14px">&nbsp;</span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">教育背景：</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">在学时间</span>: 2014.09 - 2018.06</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">学校：五邑大学</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">专业：软件工程</span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">获奖荣耀：</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">【</span>2015 <span style="font-family:宋体">年】五邑大学校园软件设计大赛优胜奖</span></span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">【</span>2015 <span style="font-family:宋体">年】五邑大学信息商业技能大赛二等奖</span></span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">【</span>2015 <span style="font-family:宋体">年】广东省智慧校园软件设计大赛三等奖 &nbsp;</span></span>
      </p>
      <p>
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">校内项目：</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">2016-05 </span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">-</span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">&nbsp;2016-07</span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">&nbsp;</span><span style=";font-family:宋体;font-size:14pxfont-family:宋体">四海通商城</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">【项目简介】以四海通水行用户为基础的微信商城，包含日用品、订水、生鲜等。</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">【主要负责】基于</span>ThinkPHP<span style="font-family:宋体">、</span><span style="font-family:Calibri">Bootstrap</span><span style="font-family:宋体">开发微信前后客户端，适配移动端。</span></span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px">&nbsp;</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">2016-01 </span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">-</span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">&nbsp;2016-03</span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">&nbsp;</span><span style=";font-family:宋体;font-size:14pxfont-family:宋体">即教宝</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">【项目简介】基于</span>Android<span style="font-family:宋体">和</span><span style="font-family:Calibri">IOS</span><span style="font-family:宋体">的家教信息发布平台，允许多组织多角色管理成员及信息。</span></span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">【主要负责】数据库及</span>app<span style="font-family:宋体">接口设计，家教信息后台管理开发。</span></span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px">&nbsp;</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">2016-09 </span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">-</span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">&nbsp;2016-11</span><span style="font-family: 宋体;color: rgb(102, 102, 102);letter-spacing: 0;font-size: 12px">&nbsp;</span><span style=";font-family:宋体;font-size:14pxfont-family:宋体">萌宠圈</span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">【项目简介】一款物联网设备</span>-<span style="font-family:宋体">宠物圈，通过</span><span style="font-family:Calibri">Socket</span><span style="font-family:宋体">实现对宠物圈的远程监控与控制，并及时同步到云服务器，实时反馈到客户端。</span></span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px"><span style="font-family:宋体">【主要负责】数据库及爱宠圈</span>app<span style="font-family:宋体">接口设计，</span><span style="font-family:Calibri">socket</span><span style="font-family:宋体">连接控制宠物圈传输信息接口的设计。</span></span>
      </p>
      <p style="margin-left:28px;text-indent:28px">
        <span style=";font-family:宋体;font-size:14px">&nbsp;</span>
      </p>
      <p>
        <span style="font-family: 宋体;letter-spacing: 0;font-size: 12pxfont-family:宋体">个人技能：</span>
      </p>
      <p style="text-indent:28px">
        <span style=";font-family:宋体;font-size:14pxfont-family:宋体">主修课程：操作系统、数据结构、计算机网络、数据库原理、软件工程等。</span>
      </p>
      <p style="text-indent:28px">
        <span style="font-family: 宋体;letter-spacing: 0;font-size: 12pxfont-family:宋体">专业技能：</span>
      </p>
      <p style="text-indent:28px">
        <span style="font-family: 宋体;letter-spacing: 0;font-size: 12px">(1) <span style="font-family:宋体">能够熟练使用</span><span style="font-family:Arial">PHP</span><span style="font-family:宋体">编程，对</span><span style="font-family:Arial">OOP</span><span style="font-family:宋体">编程及设计模式有较好的掌握，对</span><span style="font-family:Arial">JavaScript</span><span style="font-family:宋体">、</span><span style="font-family:Arial">C</span><span style="font-family:宋体">语言较为熟悉，对于</span><span style="font-family:Arial">Laravel</span><span style="font-family:宋体">、</span><span style="font-family:Arial">ThinkPHP</span><span style="font-family:宋体">、</span><span style="font-family:Arial">Swoole</span><span style="font-family:宋体">等主流框架及</span><span style="font-family:Arial">WordPress</span><span style="font-family:宋体">、微信公众号的开发等有一定的了解和开发经验，熟悉</span><span style="font-family:Arial">LNMP</span><span style="font-family:宋体">部署及</span><span style="font-family:Arial">MySQL</span><span style="font-family:宋体">优化，熟悉</span><span style="font-family:Arial">Redis</span><span style="font-family:宋体">和</span><span style="font-family:Arial">Memcached</span><span style="font-family:宋体">。</span></span>
      </p>
      <p style="text-indent:28px">
        <span style="font-family: 宋体;letter-spacing: 0;font-size: 12px">&nbsp;</span>
      </p>
      <p style=";text-align:justify;text-justify:inter-ideograph">
        <span style="font-family: 宋体;letter-spacing: 0;font-size: 12pxfont-family:宋体">自我评价：</span>
      </p>
      <p style="text-indent:28px;text-align:justify;text-justify:inter-ideograph">
        <span style="font-family: 宋体;letter-spacing: 0;font-size: 12px"><span style="font-family:宋体">热爱技术，喜欢尝试新事物，如</span>nodejs<span style="font-family:宋体">、</span><span style="font-family:Arial">vuejs</span><span style="font-family:宋体">等，善于与他人沟通、合作，大学时期曾当过工作室的负责人，带领或参与过多个团队项目，有出色的合作团队意识。</span></span>
      </p>
      <p>
        <br/>
      </p>
    </my-dialog>

    <!--<my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">-->
      <!--<log-form @has-log="onSuccessLog"></log-form>-->
    <!--</my-dialog>-->

    <!--<my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">-->
      <!--<reg-form></reg-form>-->
    <!--</my-dialog>-->
  </div>
</template>

<script>
import Dialog from '../components/base/dialog'
import LogForm from '../components/logForm'
import RegForm from '../components/regForm'
export default {
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm
  },
  data () {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username: ''
    }
  },
  methods: {
    aboutClick () {
      this.isShowAboutDialog = true
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    onSuccessLog (data) {
      console.log(data)
      this.closeDialog ('isShowLogDialog')
      this.username = data.username
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
}
.app-head {
  background: #363636;
  /*color: #b2b2b2;*/
  /*height: 90px;*/
  /*line-height: 90px;*/
  /*width: 100%;*/
}

.app-content {
  padding-bottom:100px
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
  border-bottom-right-radius: 0;border-right: 0
}

#search-btn {
  border-left: none;border-top-left-radius: 0;-webkit-border-top-left-radius:0;-webkit-border-bottom-left-radius:0;
  border-bottom-left-radius: 0;margin-left: 0
}
.icon-bar {
  background-color: #ffffff;
}
</style>
