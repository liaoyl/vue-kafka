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
			<el-table-column prop="topic" label="topic" sortable>
			</el-table-column>
			<el-table-column prop="numPartition" label="numPartition" sortable>
			</el-table-column>
			<el-table-column prop="isrRate" label="isrRate" :formatter="formatRate" sortable>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="5" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

	</section>
</template>

<script>
	import { getTopicsBrief } from '../../api/api'

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
      getTopicsBrief(para).then((res) => {
        this.total = res.data.total
        this.topics = res.data.topics
        this.listLoading = false
      })
    }
  },
  mounted () {
    this.getTopics()
  }
}
</script>
<style scoped>

</style>
