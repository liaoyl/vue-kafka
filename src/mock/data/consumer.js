import Mock from 'mockjs'

const consumerList = []
for (let i = 0; i < 300; i++) {
  consumerList.push(Mock.mock({
    id: i + 1,
    consumerName: 'vdfvdf',
    type: '123'
  }))
}

export { consumerList }
