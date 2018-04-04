import Mock from 'mockjs'

const brokerList = []
for (let i = 0; i < 300; i++) {
  brokerList.push(Mock.mock({
    id: i + 1,
    securityProtocol: {'PLAINTEXT': 'PLAINTEXT'},
    endPoints: ['PLAINTEXT://hadoop1:9092'],
    jmxPort: 9999,
    host: 'hadoop1',
    startTime: '2017-08-03 09:41',
    port: 9092,
    version: 4,
    rack: '',
    state: 1
  }))
}

const brokerConfigList = []
for (let i = 0; i < 10; i++) {
  brokerConfigList.push(
    'confluent.support.metrics.enable=true')
}
export { brokerList, brokerConfigList }
