<template>
  <!--S=评论-->
  <div class="archive-comment" >
    <div class="archive-comment-part1" id="commentField">
      <transition name="reply-someone-tr">
        <div class="reply-someone" v-if="reply.name != ''" >
          <div><b>引用 {{ reply.name }} 的发言(回复)</b>
            <span class="pull-right" title="关闭该回复" @click="closeReply"><b>X</b></span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ reply.content }}
        </div>
      </transition>
      <div class="col-md-4">
        <input type="text" class="form-control" name="name" placeholder=" 你的昵称 «-必填" v-model="nameModel">
        <div class="text-center input-error">{{nameErrors.errorText}}&nbsp;</div>
      </div>
      <div class="col-md-4">
        <input type="text" class="form-control" name="email" id="email" v-model="emailModel" placeholder=" 电子邮件«-必填，不公开">
        <div class="text-center input-error">{{emailErrors.errorText}}&nbsp;</div>
      </div>
      <div class="col-md-4">
        <input type="text" class="form-control" name="url" placeholder=" 个人网址«-选填" v-model="urlModel"></div>
      <div class="text-center input-error">{{urlErrors.errorText}}&nbsp;</div>
    </div>
    <div class="col-md-12" style="padding: 0 0 0 0">
      <vue-html5-editor :content="content" :height="150" id="commentContent"  @change="updateData"></vue-html5-editor>
      <button class="btn btn-primary pull-right" type="button" @click="submitComment">&nbsp;提交评论&nbsp;</button>
    </div>
    <div class="parting-line">&nbsp;</div>
    <div class="archive-comment-part2">
      <div class="archive-comment-part2-title">
        <h4 class="pull-left">评论</h4>
        <span class="pull-right" >{{ comments.length }}条评论</span>
      </div>
      <div class="parting-line">&nbsp;</div>
      <!--S=评论内容列表-->
      <div class="archive-comment-part2-list" v-for="(item, index) in comments">
        <div class="col-md-12 archive-comment-part2-list-author" :id="'quote'+item.id">
          <a :href="item.url?item.url:'javascript:void(0)'">{{ item.name }}</a>&nbsp;说：
          <span class="pull-right">
            {{(item.created_at).split("-")[0]+"年"+(item.created_at).split("-")[1]+"月"+(item.created_at).split("-")[2]+"日"}}
          </span>
        </div>
        <div class="col-md-12 archive-comment-part2-list-content" >
          <div class="col-md-12 quote" v-if="item.p_id != 0">
            <div><b>引用 <a :href="'#quote'+item.p_id" title="点击跳回该引用评论位置">{{ item.quote_name }} 的发言</a>(回复)</b></div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.quote_content }}
          </div>
          {{ item.content }}
        </div>
        <div class="col-md-12 archive-comment-part2-list-op pull-right text-right">
          <span class="op"><a href="#commentField" @click="replySomeOne(item)">回复</a></span>
          <!--<span class="op op-up"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;<span class="num">{{ item.up_num }}</span></span>-->
          <!--<span class="op op-down"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>&nbsp;<span class="num">{{ item.down_num }}</span></span>-->
        </div>
        <div class="dot-line">&nbsp;</div>
      </div>
      <!--E=评论内容列表-->
    </div>
  </div>
  <!--E=评论-->
</template>

<script>
  export default {
    created: function () {
      //获取评论
      this.$http.get('/api/getComments')
        .then((res) => {
        this.comments = res.data;
      }, (err) => {
        console.log(err);
      })
    },
    data () {
      return {
        content: '',
        comments: [],
        reply: {
          id: "",
          name: "",
          content: ""
        },
        nameModel: '',
        emailModel: '',
        urlModel: ''
      }
    },
    computed: {
      emailErrors () {
        let errorText, status
        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g.test(this.emailModel)) {
          status = false
          errorText = '邮箱格式不合法'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.emailFlag) {
          errorText = ''
          this.emailFlag = true
        }
        return {
          status,
          errorText
        }
      },
      nameErrors () {
        let errorText, status
        if (!/^\w{1,50}$/g.test(this.nameModel)) {
          status = false
          errorText = '昵称长度不合法'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      urlErrors () {
        let errorText, status
        if (!/(([a-zA-z]+:\/\/)?[^\s]*\.[^\s]+)/g.test(this.urlModel) && (this.urlModel).trim() != "") {
          status = false
          errorText = '网址格式不合法'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.urlFlag) {
          errorText = ''
          this.urlFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      updateData () {
        //然后是获取数据
        this.content = document.getElementsByClassName("content")[0].innerHTML;
      },
      replySomeOne(item) {  //回复某人
        this.reply.id = item.id;
        this.reply.name = item.name;
        this.reply.content = item.content;
      },
      closeReply() {  //关闭引用的回复
        this.reply.id = "";
        this.reply.name = "";
        this.reply.content = "";
      },
      submitComment() {//TODO:提交评论,这个应该写作需要检查，不能随便提交评论~~~
        if(!this.nameErrors.status || !this.emailErrors.status || !this.urlErrors.status) {
          if(!/[^\s]{1,}/g.test(this.content))
            alert('请填写评论内容');
          else
            alert('部分选项未按要求填写');
        }else{
          var name = document.getElementsByName("name")[0].value;
          var email = document.getElementsByName("email")[0].value;
          var url = document.getElementsByName("url")[0].value;
          var options = {
            name: name,
            email: email,
            url: url,
            content: this.content,
            reply: this.reply
          };
          //提交评论
          this.$http.post('/someUrl', options).then(response => {
            this.comments.push(response.data.msgs);
        }, response => {
            //TODO：示例数据
            this.comments.push({
              "id": 3,
              "name": name,
              "url": url,
              "content": this.content,
              "up_num": 55,
              "down_num": 0,
              "created_at": "2017-07-14",
              "p_id": this.reply.id != ""?this.reply.id:0,
              "quote_name": this.reply.quote_name,
              "quote_content": this.reply.quote_content
            });
          })
        }
      }
    }
  }

</script>

<style scoped>
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

  .parting-line {
    border: none;border-bottom: 1px solid #eeeeee;height: 1px;
    clear: both;
  }

  .dot-line {
    border-bottom:1px dashed #e5e5e5;
    clear: both;
  }

  .archive-comment {
    clear:both;padding-top: 20px;padding-bottom: 10px
  }
  .archive-comment-part2-list-op span{
    color:#999999;
    cursor: pointer;
    letter-spacing: normal;
  }
  .archive-comment-part2-list-author  span{
    color:#999999;
    letter-spacing: normal;
  }

  .archive-comment-part2-list-op .op-up:hover,.op-up span:hover,.op-down:hover,.op-down span:hover {
    color:#4398ed;
  }

  .archive-comment-part2-list-op .op {
    margin-left: 15px;
  }

  .archive-comment-part2-list {
    padding-top: 10px;padding-bottom: 5px
  }

  .archive-comment-part2-list-content {
    padding:10px 5px 10px 25px
  }

  .archive-comment-part2-list-content .quote{
    margin-bottom: 10px;
  }

  .archive-comment-part1 .col-md-4,.col-md-4 input{
    margin-left: 0;
    padding-left: 0;
    margin-right: 0;
    padding-right: 0;
  }

  .archive-comment-part1 .reply-someone,.archive-comment-part2-list-content .quote {
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }

  .archive-comment-part1 .reply-someone span:hover{
    color: #4398ed;
    cursor: pointer;
  }

  .reply-someone-tr-leave-active {
    transition: all 1s;
    transform: translateY(-900px);
  }

  .archive-comment-part2 {
    padding-top: 10px
  }
  .archive-comment-part2-title span {
    height: 20px;line-height: 50px
  }
  .input-error {
    color: #999999;
  }

</style>
