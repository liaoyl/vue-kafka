import axios from 'axios'

let base = ''

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data) }
export const getTopicsListPage = params => { return axios.get(`${base}/kafka/topicsbrief/page`, { params: params }) }
export const getTopicsBrief = params => { return axios.get(`${base}/kafka/topicsbrief`, { params: params }) }
