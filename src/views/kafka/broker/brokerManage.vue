<template>
  <section>
    <section v-show="tableShow">
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item>
            <el-input placeholder=""></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="getBrokerList">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">批量启停</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">轮转重启</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--列表-->
      <el-table
                v-loading="listLoading"
                :row-key="getRowKeys"
                :expand-row-keys="expands"
                :data="brokerList"
                style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50px"></el-table-column>
        <el-table-column label="id" prop="id" width="100px"></el-table-column>
        <el-table-column label="主机名" prop="host"></el-table-column>
        <el-table-column label="端口" prop="port"></el-table-column>
        <el-table-column label="启动时间" width="150px" prop="startTime"></el-table-column>
        <el-table-column label="状态" prop="state"></el-table-column>
        <el-table-column width="250px" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary">停止</el-button>
            <el-button size="mini" type="primary" @click="getDetail(scope.row.id)">详情</el-button>
            <el-button type="primary" size="mini" @click="configFn(scope.row.host)">配置与修改</el-button>
          </template>
        </el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" class="demo-table-expand">
              <el-form-item label="securityProtocol">
                <span>：{{ props.row.securityProtocol }}</span>
              </el-form-item>
              <el-form-item label="endPoints">
                <span>：{{ props.row.endPoints }}</span>
              </el-form-item>
              <el-form-item label="jmxPort">
                <span>：{{ props.row.jmxPort }}</span>
              </el-form-item>
              <el-form-item label="version">
                <span>：{{ props.row.version }}</span>
              </el-form-item>
              <el-form-item label="rack">
                <span>：{{ props.row.rack }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </el-table>
      <el-col :span="24" class="toolbar">
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="5" :total="total" style="float:right;">
        </el-pagination>
      </el-col>
    </section>
    <section v-loading="listLoading" v-bind:hidden="tableShow">
      <ConfigDetail :configData="configData" v-on:listenToChildEvent="showMessageFromChild"></ConfigDetail>
    </section>
  </section>
</template>

<script>
import list from '../../../js/broker/list'
export default list
</script>
<style scoped>

</style>
