import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { LoginUsers, Topics } from './data/topic'
let _Topics = Topics
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

    // 删除Topic
    mock.onDelete('/kafka/topics/remove').reply(config => {
      let { topic } = config.params
      _Topics = _Topics.filter(u => u.topic !== topic)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })
  }
}
