<template>
  <p id="back-to-top"><a href="#top"><span><i class="fa fa-chevron-up" aria-hidden="true"></i></span></a></p>
</template>

<script>
  export default {
    created: function() {
      $(window).scroll(function(){
        if ($(window).scrollTop()>300){
          $("#back-to-top").fadeIn(200);
        }else{
          $("#back-to-top").fadeOut(200);
        }
      });
      //当点击跳转链接后，回到页面顶部位置
      $("#back-to-top").click(function(){
        $('body,html').animate({scrollTop:0},200);
        return false;
      });
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  p#back-to-top{
    position:fixed;
    bottom:18px;
    right:12px;
    display: none;
  }
  p#back-to-top a{
    text-align:center;
    text-decoration:none;
    color:#000;
    display:block;
    width:30px;
    /*使用CSS3中的transition属性给跳转链接中的文字添加渐变效果*/
    -moz-transition:color1s;
    -webkit-transition:color1s;
    -o-transition:color1s;
  }
  p#back-to-top a:hover{
    color:#000011;
  }
  p#back-to-top a span{
    background-color:#ffffff;
    z-index: -100;
    border: 1px solid #cccccc;
    border-radius:6px;
    display:block;
    height:30px;
    width:30px;
    margin-bottom:5px;
    /*使用CSS3中的transition属性给<span>标签背景颜色添加渐变效果*/
    -moz-transition:background1s;
    -webkit-transition:background1s;
    -o-transition:background1s;
  }
  #back-to-top a:hover span{
    background-color:#f0f0f0;
  }
</style>
