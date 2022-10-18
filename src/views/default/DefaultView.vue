<template>
  <AnimBounceInUp  class="default">
    <el-card :class="plate" >
      <el-image :src="url"  fit="cover" />
    </el-card>
  </AnimBounceInUp>
</template>

<script setup>
import {plate} from "@/assets/css";
import imgUrl from '@/assets/welcome.png'
import {ref} from "vue";
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
const url = ref(`${imgUrl}`)
</script>

<style scoped lang="scss">
.default {
  overflow: hidden;
  height: 100%;
}
</style>