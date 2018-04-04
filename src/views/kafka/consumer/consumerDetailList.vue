<template>
	<section>
    <section>


      2222222


      <!--列表-->
      <el-table
        v-loading="listLoading"
        :data="consumerList"
        style="width: 100%">
        <el-table-column label="Topic名称" prop="consumerName"></el-table-column>
        <el-table-column width="250px" label="操作">
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
  import list from '../../../js/consumer/list?v=5'
  export default list
</script>
