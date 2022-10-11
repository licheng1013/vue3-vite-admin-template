<template>
  <el-card :ref="anim" class="code" v-if="enabled"  :class="animBounceInUp" >
    {{enabled}}
    <el-button @click="onQuit">退出</el-button>
  </el-card>
</template>

<script  setup>
import {animBounceInUp, onAnimBounceInDown} from "@/assets/anim";
import {ref} from "vue";


defineProps({enabled: Boolean});
// 这里目前只能做一个开关从父组件关闭，子组件关闭有时候总会点击无效果
let emits = defineEmits(["onOff"]);

const anim = ref(null)


const onQuit = () => {
  const element = document.querySelector('.code');
  element.classList.add('animate__animated', 'animate__bounceOutLeft');
  element.addEventListener('animationend', () => {
    // do something
    emits("onOff")
  });

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