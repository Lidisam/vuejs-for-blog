<template>
  <archives-show :Archives="Archives" :url="'/archives/category/'+category+'/page/'" isPagination="0">
    <div slot="archives-type-desc">
      <!--暂无-->
    </div>
  </archives-show>
</template>
<script>
  import ArchivesShow from '../components/archivesShow'
  export default {
    components: {
      ArchivesShow
    },
    created: function () {
      //获取初始文章信息
      this.$http.get('/api/getArchives')
        .then((res) => {
        this.Archives = res.data;
      }, (err) => {
        console.log(err);
      })
    },
    data () {
      return {
        Archives: [],
        category:  this.$route.params.keyword
      }
    }
  }
</script>

<style scoped>
</style>
