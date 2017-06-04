<template>
  <!--S=分页-->
  <div class="col-md-12 " style="margin-left: 0;padding-left: 0">
    <ul class="pager">
      <li class="previous">
        <a v-if="page != 1" @click="prevPage">&larr; 上一页</a>
      </li>
      <li class="next">
        <a @click="nextPage">下一页 &rarr;</a>
      </li>
    </ul>
  </div>
  <!--E=分页-->
</template>

<script>
  export default {
    props: ['url'],
    created: function () {
    },
    data () {
      return {
        invTime: 2000,
        Archives: [],
        page:  this.$route.params.num
      }
    },
    methods: {
      prevPage () {
        this.page = parseInt(this.page) - 1;
        window.location.href = this.url+this.page
      },
      nextPage () {
        this.page = parseInt(this.page) + 1;
        window.location.href = this.url+this.page
      }
    }
  }
</script>

<style scoped>
</style>
