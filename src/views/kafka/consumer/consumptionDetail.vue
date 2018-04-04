<template>
	<section>
    <section>
      333333
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item>
            <el-input placeholder=""></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">全部重置Offset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--列表-->
      <el-table
        v-loading="listLoading"
        :data="consumerList"
        style="width: 100%">
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column label="Topic名称" prop="consumerName"></el-table-column>
        <el-table-column label="分区ID"></el-table-column>
        <el-table-column label="LogEnd偏移量"></el-table-column>
        <el-table-column label="当前偏移量"></el-table-column>
        <el-table-column label="延迟Lag"></el-table-column>
        <el-table-column label="状态"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button size="mini" type="primary">重置Offset</el-button>
            <el-button size="mini" type="primary">查看最近提交时间</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-col :span="24" class="toolbar">
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="5" :total="total" style="float:right;">
        </el-pagination>
      </el-col>
    </section>
	</section>
</template>

<script>
  import list from '../../../js/consumer/list?v=3'
  export default list
</script>
