<template>
      <div class="navBar" >
          <el-tag class="mx-1" size="large" closable v-for="i in 5">路由:{{i}}</el-tag>
      </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.navBar{
  .el-tag{
    margin-left: 8px;
  }
}

</style>