<template>
    <div class="table" >
      <el-card class="edit">
        <el-button type="primary">添加</el-button>
        <el-button type="success" :disabled="multipleSel.length !== 1">修改</el-button>
        <el-button type="danger" @click="onDelete" :disabled="multipleSel.length < 1">删除</el-button>
      </el-card>
      <el-card>
        <el-table :data="data" style="width: 100%" @selection-change="onSelChange" height="calc(100vh - 340px)">
          <el-table-column type="selection" width="55"/>
          <el-table-column v-for="(item,key,index) in model" :label="item" :prop="key"/>
        </el-table>
      </el-card>
      <Transition>

      </Transition>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {ElMessageBox} from "element-plus";

//model: 动态渲染table列, data: table渲染的具体数据
defineProps({model: {}, data: {type: Array},}) //设置后消除vue黄色警告，数据

const multipleSel = ref([])
const onSelChange = (val) => {multipleSel.value = val}
// 统一删除方法
const emit = defineEmits(['onDelete'])
const onDelete = () => {
  ElMessageBox.confirm('是否删除所选元素！', '删除操作', {confirmButtonText: '确认', cancelButtonText: '取消', type: 'error'
    , center: true,}).then(()=>{
    emit('onDelete',multipleSel.value)
  }).catch()
}
</script>


<style scoped lang="scss">
.table {
  height: 100%;

  .edit {
    display: flex;
    align-items: center;
    height: 55px;
    margin-bottom: 8px;
  }
}
</style>