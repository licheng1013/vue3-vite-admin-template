<template>
    <el-card class="default" :class="animBounceInUp">
      <el-image :src="url"  fit="cover" />
    </el-card>
</template>

<script setup>
import {animBounceInUp} from "@/assets/anim";
import imgUrl from '@/assets/welcome.png'
import {ref} from "vue";
const url = ref(`${imgUrl}`)
</script>

<style scoped lang="scss">
.default {
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>