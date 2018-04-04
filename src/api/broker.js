import axios from 'axios'
let base = ''
export const getListPage = params => { return axios.get(`${base}/kafka/brokers/page`, { params: params }) }
export const getConfigDetail = params => { return axios.get(`${base}/kafka/brokers/configDetail`, { params: params }) }
