<template>
  <div class="help" :class="animBounceInUp">
    <el-card :class="plate" >
        Help
    </el-card>
  </div>
</template>

<script setup>
import {plate} from "@/assets/css";
import {animBounceInUp} from "@/assets/anim";
</script>

<style scoped lang="scss">
.help{
  height: 100%;
}

</style>