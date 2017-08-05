import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import History from '@/components/History'
import Date from '@/components/Date'
import Report from '@/components/Report'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
        path: '/history',
        name: 'History',
        component: History
    },{
          path: '/',
          name: 'Date',
          component: Date
      },{
          path: '/report',
          name: 'Report',
          component: Report
      }
  ]
})
