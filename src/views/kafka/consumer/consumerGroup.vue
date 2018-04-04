<template>
	<section>
    <section>
      1111
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item>
            <el-input placeholder=""></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--列表-->
      <el-table
        v-loading="listLoading"
        :data="consumerList"
        style="width: 100%">
        <el-table-column label="id" prop="id" width="100px"></el-table-column>
        <el-table-column label="consumer名称" prop="consumerName"></el-table-column>
        <el-table-column label="类型" prop="type"></el-table-column>
        <el-table-column width="250px" label="操作">
          <template slot-scope="scope">
            <a href="#/kafka/consumer/consumerDetailList"><el-button size="mini" type="primary">详情</el-button></a>
            <el-button size="mini" type="primary">删除</el-button>
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
  import list from '../../../js/consumer/list'
  export default list
</script>
