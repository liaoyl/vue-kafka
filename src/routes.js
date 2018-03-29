import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Topic from './views/kafka/topicManage.vue'
import Broker from './views/kafka/brokerManage.vue'
import ConsumerGrroup from './views/kafka/consumerGroup.vue'
import Page6 from './views/zookeeper/Page6.vue'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: 'Kafka',
    iconCls: 'el-icon-message', // 图标样式class
    children: [
        { path: '/main', component: Main, name: '总览', hidden: true },
        { path: '/kafka/broker', component: Broker, name: 'Broker Manage' },
        { path: '/kafka/topic', component: Topic, name: 'Topic Manage' },
        { path: '/kafka/consumerGrroup', component: ConsumerGrroup, name: 'Consumer Group' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: 'Zookeeper',
    iconCls: 'fa fa-address-card',
    children: [
        { path: '/page6', component: Page6, name: 'zookeeper查看' },
        { path: '/page6', component: Page6, name: 'ZK Config' }
    ]
  }
]

export default routes
