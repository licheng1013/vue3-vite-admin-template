<template>
      <AnimBounceInUp class="manager">
        <el-card class="el-card" :class="plate">
          <el-image :src="url"  fit="cover" />
        </el-card>
      </AnimBounceInUp>
</template>

<script setup>
import {plate} from "@/assets/css";
import imgUrl from '@/assets/dashboard.png'
const url = ref(`${imgUrl}`)
import {ref} from "vue";
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
</script>
<style scoped lang="scss">
.manager{
  height: 100%;
}
</style>