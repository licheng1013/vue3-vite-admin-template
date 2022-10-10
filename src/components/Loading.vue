<template>
  <div v-if="loadingFlag" class="loading">
    <div>
      <el-image class="animate__infinite" :class="animBounce" :src="url" style="width: 50px;height:50px">
      </el-image>
    </div>
  </div>
</template>

<script setup>
// 一个简单的loading组件
import {animBounce} from "@/assets/anim";
import imgUrl from '@/assets/load.png'
import {ref} from "vue";
const url = ref(`${imgUrl}`)
defineProps({loadingFlag: Boolean})

</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(117, 106, 106, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>