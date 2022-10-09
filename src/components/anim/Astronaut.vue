<template>
  <div :style="'height:'+height+';width:'+width" class="astronaut">
    <el-image :src="url"></el-image>
  </div>
</template>

<script setup>
import imgUrl from '@/assets/astronaut.gif'
import {ref} from "vue";

const url = ref(`${imgUrl}`)
defineProps({
  height: {
    type: String,
    default: "100%"
  },
  width: {
    type: String,
    default: "100%"
  }
})
</script>
<style scoped lang="scss">

</style>