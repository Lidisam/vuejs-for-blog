<template>
  <archives-show :Archives="Archives" :url="'/archives/date/'+year+'/'+month+'/page/'" isPagination="0">
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
        year:  this.$route.params.year,
        month:  this.$route.params.month
      }
    }
  }
</script>

<style scoped>
</style>
