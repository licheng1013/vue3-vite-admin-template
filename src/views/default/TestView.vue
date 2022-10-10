<template>
  <div class="default" :class="animBounceInUp">
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
const url = ref(`${imgUrl}`)
</script>

<style scoped lang="scss">
.default {
  height: 100%;
}
</style>