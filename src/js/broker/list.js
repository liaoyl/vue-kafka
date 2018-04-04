import { getListPage, getConfigDetail } from '@/api/broker'
import ConfigDetail from '@/views/kafka/broker/configDetail'
const list = {
  components: {
    ConfigDetail
  },
  data () {
    return {
      tableShow: true,
      brokerList: [],
      getRowKeys(row) {
        return row.id
      },
      expands: [],
      multipleSelection: [],
      query: {
        page: 1
      },
      total: 0,
      listLoading: false,
      configQuery: {
        host: 9999
      },
      configData: []
    }
  },
  created() {
    this.getBrokerList()
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleCurrentChange (val) {
      this.query.page = val
      this.getBrokerList()
    },
    getBrokerList() {
      this.listLoading = true
      getListPage(this.query).then((res) => {
        this.listLoading = false
        this.brokerList = res.data.list
        this.total = res.data.total
      })
    },
    getDetail(id) {
      this.expands = []
      this.expands.push(id)
    },
    configFn(host) {
      this.tableShow = false
      this.listLoading = true
      this.configQuery.host = host
      getConfigDetail(this.configQuery).then((res) => {
        this.listLoading = false
        this.configData = res.data
      })
    },
    showMessageFromChild(data) {
      this.tableShow = data
    }
  }
}
export default list
