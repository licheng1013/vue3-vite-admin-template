<template>
    <div class="app">
      <Table class="table" :model="model" :data="data" @onDelete="onDelete"></Table>
      <Pagination class="page" @onChange="onChange"></Pagination>
    </div>
</template>

<script setup>
import Pagination from "@/components/Pagination.vue";
import Table from "@/components/Table.vue";
import {ref} from "vue";
const model = {
   index:"索引",
   name:"姓名",
   sex:"性别",
   addr:"地址",
   status:"状态",
   createTime:"创建时间",
}

let modelData = {
  index:0,
  name:"小蓝",
  sex:"男",
  addr:"北京市",
  status:"关闭",
  createTime:"2022/10/7",
}
let data = ref([])

// 查询-替换成服务器
const onList = () => {
  for (let i = 0; i < 30; i++) {
    let v = JSON.parse(JSON.stringify(modelData))
    v.index = i;
    data.value.push(v)
  }
}


//分页改变-这里需要请求分页数据,默认会回调一次
const onChange = (v) => {
  console.log(v)
  onList()
}
// 修改-本地删除
const onDelete = (v) => {
  for (let i in v) {
    for (let j = 0; j < data.value.length; j++) {
      if (data.value[j].index === v[i].index) {
        data.value.splice(j,1)
        break
      }
    }
  }
}
</script>

<style scoped lang="scss">
.app{
  height: 100%;
  display: flex;
  flex-direction: column;
  .table{
    flex-grow: 1;
  }
}
</style>