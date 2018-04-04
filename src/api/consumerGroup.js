import axios from 'axios'
let base = ''

export const getListPage = params => { return axios.get(`${base}/kafka/consumerGroup/page`, { params: params }) }
