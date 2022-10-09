<template>
    <el-card class="manager" :class="animBounceInUp">
        <el-image :src="url"  fit="cover" />
    </el-card>
</template>

<script setup>
import {animBounceInUp} from "@/assets/anim";
import imgUrl from '@/assets/dashboard.png'
const url = ref(`${imgUrl}`)
import {ref} from "vue";
</script>
<style scoped lang="scss">
.manager{
  height: 100%;
  display: flex;
  justify-content: center;
}

</style>