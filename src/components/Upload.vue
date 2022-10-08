<template>

  <!-- show-file-list开启后不会显示上传进度 -->
  <el-upload :headers="authMap" @on-success="onSuccess"  action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
             drag multiple :show-file-list="false">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖动上传 <em>点击上传</em>
    </div>
  </el-upload>
</template>

<script setup>
import {authMap} from "@/stores/auth";
// 结果回调
const onSuccess = (res,file,files) => {
  emit('onSuccess',res,file,files)
}
const emit = defineEmits(['onSuccess'])
</script>

<style scoped lang="scss">

</style>