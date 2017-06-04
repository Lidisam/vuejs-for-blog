import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import VueResource from 'vue-resource'
import DetailPage from '@/pages/detail'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'
import OrderListPage from '@/pages/orderList'

//blog组件
import ArchivesPage from '@/pages/archives'
import ArchivesCategoryPage from '@/pages/archivesCategorys'
import IndexPaginationPage from '@/pages/indexPagination'
import NotFoundPage from '@/pages/notFound'


Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      name: 'archives',
      path: '/archive/:id',
      component: ArchivesPage
    },
    {
      name: 'archivesCategory',
      path: '/archives/category/:id',
      component: ArchivesCategoryPage
    },
    {  //首页分页
      name: 'indexPagination',
      path: '/page/:num',
      component: IndexPaginationPage
    },
    {  //404页面
      name: 'NotFound',
      path: '*',
      component: NotFoundPage
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
