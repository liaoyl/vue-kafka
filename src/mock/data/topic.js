import Mock from 'mockjs'

const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
]
const Topics = []
for (let i = 0; i < 9; i++) {
  Topics.push(Mock.mock({
    topic: 'topic' + i,
    'numPartition|5-10': 1,
    isrRate: 1
  }))
}

export { LoginUsers, Topics }
