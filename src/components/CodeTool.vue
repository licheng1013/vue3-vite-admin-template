<template>
  <div class="anim">
    <el-card  class="code" v-if="enabled"  :class="animBounceInDown">
      <el-button @click="onQuit">退出</el-button>
    </el-card>
  </div>
</template>

<script  setup>
import {animBounceInDown} from "@/assets/anim";
defineProps({enabled: Boolean});
// 这里目前只能做一个开关从父组件关闭，子组件关闭有时候总会点击无效果
let emits = defineEmits(["onOff"]);

const onQuit = () => {
     emits("onOff")
}
</script>

<style scoped lang="scss">
.code {
  z-index: 1;
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>