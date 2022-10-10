<template>
  <div class="default" :class="animBounceInUp">
    <Loading :loading-flag="loadingFlag"/>
    <div class="body">
        <el-button @click="onLoading">加载动画</el-button>
    </div>
    <el-card  :class="plate">
      <div>
        <el-image :src="url"  fit="cover" />
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {plate} from "@/assets/css";
import {animBounceInUp} from "@/assets/anim";
import imgUrl from '@/assets/success.png'
import {ref} from "vue";
import Loading from "@/components/Loading.vue";

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
       margin: 32px;
    }
  }
}
</style>