import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import VueResource from 'vue-resource'
import VueHtml5Editor from 'vue-html5-editor'

//blog基础页面
import ArchivesPage from '@/pages/archives'
import ArchivesCategoryPage from '@/pages/archivesCategorys'
import IndexPaginationPage from '@/pages/indexPagination'
import ArCatPaginationPage from '@/pages/archivesCategorysPagination'
import ArchivesDatePage from '@/pages/archivesDate'
import ArchivesDatePagPage from '@/pages/archivesDatePagination'
import NotFoundPage from '@/pages/notFound'
import ContactPage from '@/pages/contactMe'
import DatePage from '@/pages/date'

Vue.use(Router);
Vue.use(VueResource);
Vue.use(VueHtml5Editor,{language: "zh-cn",hiddenModules: ["info","list","image","font"]});

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {  //首页分页
      name: 'indexPagination',
      path: '/page/:num',
      component: IndexPaginationPage
    },
    {   //文章详情页
      name: 'archives',
      path: '/archive/:id',
      component: ArchivesPage
    },
    {  //分页列表页
      name: 'archivesCategory',
      path: '/archives/category/:keyword',
      component: ArchivesCategoryPage
    },
    {   //分类列表页分页页面
      name: 'arCatPagination',
      path: '/archives/category/:keyword/page/:num',
      component: ArCatPaginationPage
    },
    {  //日期归档也
      name: 'archivesDate',
      path: '/archives/date/:year/:month?',
      component: ArchivesDatePage
    },
    {  //日期归档分页页面
      name: 'archivesDatePagPage',
      path: '/archives/date/:year/:month?/page/:num',
      component: ArchivesDatePagPage
    },
    {  //rss订阅
      name: 'feedPage',
      path: '/feed'
    },
    {  //站点地图
      name: 'siteMapPage',
      path: '/siteMap'
    },
    {  //联系我
      name: 'contactPage',
      path: '/contact',
      component: ContactPage
    },
    {  //日期归档日志
      name: 'datePage',
      path: '/date',
      component: DatePage
    },
    {  //404页面
      name: 'NotFound',
      path: '*',
      component: NotFoundPage
    }
  ]
})
