<template>
  <AnimBounceInUp class="default">

    <Loading :loading-flag="loadingFlag"/>
    <CodeTool :enabled="codeFlag" @onOff="codeFlag=false"></CodeTool>
    <div class="body">
      <el-button @click="onLoading">加载动画</el-button>
      <el-button @click="codeFlag = true">代码工具</el-button>
      <Upload class="el-button">上传组件</Upload>
    </div>
    <el-card  :class="plate">
      <el-image :src="url"  fit="cover" />
    </el-card>

  </AnimBounceInUp>

</template>

<script setup>
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
import {plate} from "@/assets/css";
import {animBounceInUp} from "@/assets/anim";
import imgUrl from '@/assets/success.png'
import {ref} from "vue";
import Loading from "@/components/Loading.vue";
import CodeTool from "@/components/CodeTool.vue";
import Upload from "@/components/Upload.vue";


const codeFlag = ref(false)

const onLoading = () => {
  loadingFlag.value = true
  setTimeout(()=>{
    loadingFlag.value = false
  },5000)
}
const url = ref(`${imgUrl}`)
const loadingFlag = ref(false)
</script>

<style scoped lang="scss">
.default {
  height: 100%;
  .body{
    position: absolute;
    height: 100%;
    width: 100%;
    .el-button{
       margin-top: 32px;
       margin-left: 32px;
    }
  }
}
</style>