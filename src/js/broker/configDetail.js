const configDetail = {
  data () {
    return {
      data: [],
      query: {
        host: 1
      },
      addConfigData: [
        '',
        ''
      ],
      queryData: [],
      warning: false,
      dialogVisible: false
    }
  },
  props: ['configData'],
  watch: {
    configData(curVal, oldVal) {
      this.configData = curVal
      if (this.configData) {
        for (var i = 0; i < this.configData.length; i++) {
          let ary = this.configData[i].split('=')
          this.data.push(ary)
        }
        // console.log(this.data)
      }
    }
  },
  created() {
  },
  methods: {
    returnFn() {
      this.$emit('listenToChildEvent', true)
      this.tableShow = true
    },
    editFn() {
      this.queryData = []
      if (this.data) {
        for (var i = 0; i < this.data.length; i++) {
          let ary = this.data[i].join('=')
          this.queryData.push(ary)
        }
      }
      console.log(this.queryData)
    },
    deleteFn(index) {
      this.data.splice(index, 1)
    },
    addConfigFn() {
      this.data.push(this.addConfigData)
      this.queryData = []
      if (this.data) {
        for (var i = 0; i < this.data.length; i++) {
          let ary = this.data[i].join('=')
          this.queryData.push(ary)
        }
      }
      this.dialogVisible = false
    }
  }
}
export default configDetail
