import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export const routes = [
  {
    path: '/login',
    component: _import('Login'),
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: _import('Home'),
    name: 'Kafka',
    iconCls: 'el-icon-message', // 图标样式class
    children: [
      { path: '/main', component: _import('Main'), name: '总览', hidden: true },
      { path: '/kafka/topic', component: _import('kafka/topicManage'), name: 'topic Manage' },
      { path: '/kafka/broker', component: _import('kafka/broker/brokerManage'), name: 'broker Manage' },
      { path: '/kafka/consumer/consumptionDetail', component: _import('kafka/consumer/consumptionDetail'), hidden: true },
      { path: '/kafka/consumer/consumerDetailList', component: _import('kafka/consumer/consumerDetailList'), hidden: true },
      { path: '/kafka/consumer/consumerList', component: _import('kafka/consumer/consumerGroup'), name: 'Consumer Group' }
    ]
  },
  {
    path: '/',
    component: _import('Home'),
    name: 'Zookeeper',
    iconCls: 'fa fa-address-card',
    children: [
      { path: '/zookeeper/page6', component: _import('zookeeper/Page6'), name: 'zookeeper查看' }
    ]
  }
]
export default new Router({
  routes: routes
})
console.log(routes)
