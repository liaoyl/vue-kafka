<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.topic" placeholder="topic"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getTopics">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="topics" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column prop="topic" min-width="30%" label="topic" sortable>
			</el-table-column>
			<el-table-column prop="numPartition" min-width="25%" label="numPartition" sortable>
			</el-table-column>
			<el-table-column prop="isrRate" min-width="20%" label="isrRate" :formatter="formatRate" sortable>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="small" @click="">详情</el-button>
					<el-button size="small" @click="">查看消息</el-button>
					<el-button size="small" @click="">配置操作</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="5" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

	</section>
</template>

<script>
	import { getTopicsListPage, removeTopic } from '../../api/api'

	export default {
  data () {
    return {
      filters: {
        topic: ''
      },
      topics: [],
      total: 0,
      page: 1,
      listLoading: false,
      sels: [], // 列表选中列
	      editFormVisible: false, // 编辑界面是否显示
	      editLoading: false,
      editFormRules: {
        name: [
           { required: true, message: '请输入topic', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 百分数转换
    formatRate: function (row, column) {
      let temp = row.isrRate * 100
      return temp + '%'
    },
    handleCurrentChange (val) {
      this.page = val
      this.getTopics()
    },
    // 获取topic
    getTopics () {
      let para = {
        page: this.page,
        topic: this.filters.topic
      }
      this.listLoading = true
      getTopicsListPage(para).then((res) => {
        this.total = res.data.total
        this.topics = res.data.topics
        this.listLoading = false
      })
    },
    // 删除
    handleDel: function (index, row) {
    this.$confirm('确认删除该topic吗?', '提示', {
    type: 'warning'
    }).then(() => {
    this.listLoading = true
    let para = { topic: row.topic }
    removeTopic(para).then((res) => {
    this.listLoading = false
    this.$message({
    message: '删除成功',
    type: 'success'
    })
    this.getTopics()
    })
    }).catch(() => {
    })
    }
  },
  mounted () {
    this.getTopics()
  }
}
</script>
<style scoped>
.el-button--small{
   margin-left: 0px;
}
</style>
