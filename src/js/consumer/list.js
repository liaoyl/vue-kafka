import { getListPage } from '@/api/consumerGroup'
const list = {
  data () {
    return {
      consumerList: [],
      query: {
        page: 1
      },
      total: 0,
      listLoading: false
    }
  },
  created() {
    this.getConsumerList()
  },
  methods: {
    handleCurrentChange (val) {
      this.query.page = val
      this.getConsumerList()
    },
    getConsumerList() {
      this.listLoading = true
      getListPage(this.query).then((res) => {
        this.listLoading = false
        this.consumerList = res.data.list
        this.total = res.data.total
      })
    }
  }
}
export default list
