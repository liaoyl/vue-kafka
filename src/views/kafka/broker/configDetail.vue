<template>
  <section>
    <div>
      <el-button type="primary" style="margin:15px 0;" @click="returnFn">返回</el-button>
      <el-button type="primary" style="margin:15px 0;" @click="dialogVisible = true">添加配置项</el-button>
      <el-button type="primary" style="margin:15px 0;" @click="editFn()">修改本地配置</el-button>
      <el-button type="primary" style="margin:15px 0;">修改集群配置</el-button>
    </div>
    <p style="color:red;font-size:12px;line-height:20px;margin:0;" v-show="warning">输入框不能为空</p>
    <div v-for="(item,index) in data" class="config-item">
      <span>{{item[0]}}</span>
      <el-input v-model="item[1]"></el-input>
      <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteFn(index)" circle></el-button>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <div>
        <div>属性名：<el-input v-model="addConfigData[0]"></el-input></div>
        <div>属性值：<el-input v-model="addConfigData[1]"></el-input></div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addConfigFn">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import configDetail from '../../../js/broker/configDetail'
export default configDetail
</script>
<style scoped>
  .config-item{width:50%;height:36px;line-height:36px;float:left;overflow:hidden;margin-bottom:15px;}
  .config-item .el-input{display:inline-block;width:auto;}
</style>
