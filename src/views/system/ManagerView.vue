<template>
    <div class="manager" :class="animBounceInUp">
      <el-card class="el-card" :class="plate">
            <el-image :src="url"  fit="cover" />
      </el-card>
    </div>
</template>

<script setup>
import {plate} from "@/assets/css";

import {animBounceInUp} from "@/assets/anim";
import imgUrl from '@/assets/dashboard.png'
const url = ref(`${imgUrl}`)
import {ref} from "vue";
</script>
<style scoped lang="scss">
.manager{
  height: 100%;
}
</style>