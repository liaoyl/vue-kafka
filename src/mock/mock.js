import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { LoginUsers, Topics } from './data/topic'
import { brokerList, brokerConfigList } from './data/broker'
import { consumerList } from './data/consumer'
let _Topics = Topics
let _brokerList = brokerList
let _brokerConfigList = brokerConfigList
let _consumerList = consumerList
export default {
  /**
   * mock bootstrap
   */
  bootstrap () {
    let mock = new MockAdapter(axios)

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    // 登录
    mock.onPost('/login').reply(config => {
      let {username, password} = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u))
              user.password = undefined
              return true
            }
          })

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }])
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }])
          }
        }, 1000)
      })
    })
    // 获取topic
    mock.onGet('/kafka/topicsbrief').reply(config => {
      let {topic} = config.params
      let mockTopics = _Topics.filter(topics => {
        if (topic && topics.topic.indexOf(topic) === -1) return false
        return true
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            topics: mockTopics
          }])
        }, 1000)
      })
    })

    // 获取topic列表（分页）
    mock.onGet('/kafka/topicsbrief/page').reply(config => {
      let {page, topic} = config.params
      let mockTopics = _Topics.filter(topics => {
        if (topic && topics.topic.indexOf(topic) === -1) return false
        return true
      })
      let total = mockTopics.length
      mockTopics = mockTopics.filter((u, index) => index < 5 * page && index >= 5 * (page - 1))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            topics: mockTopics
          }])
        }, 1000)
      })
    })

    // 获取broker列表
    mock.onGet('/kafka/brokers/page').reply(config => {
      let { page } = config.params
      let mockBrokerList = _brokerList.filter(brokerList => {
        return true
      })
      let total = mockBrokerList.length
      mockBrokerList = mockBrokerList.filter((u, index) => index < 5 * page && index >= 5 * (page - 1))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            list: mockBrokerList
          }])
        }, 1000)
      })
    })

    // 获取配置详情
    mock.onGet('/kafka/brokers/configDetail').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, _brokerConfigList])
        }, 1000)
      })
    })

    // 获取consumer详情
    mock.onGet('/kafka/consumerGroup/page').reply(config => {
      let { page } = config.params
      let mockConsumerList = _consumerList.filter(consumerList => {
        return true
      })
      let total = mockConsumerList.length
      mockConsumerList = mockConsumerList.filter((u, index) => index < 5 * page && index >= 5 * (page - 1))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            list: mockConsumerList
          }])
        }, 1000)
      })
    })
  }
}
