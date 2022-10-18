<template>
  <AnimBounceInUp class="help">
    <el-card :class="plate" >
      Help
    </el-card>

  </AnimBounceInUp>

</template>

<script setup>
import {plate} from "@/assets/css";
import AnimBounceInUp from "@/components/anim/AnimBounceInUp.vue";
</script>

<style scoped lang="scss">
.help{
  height: 100%;
}

</style>