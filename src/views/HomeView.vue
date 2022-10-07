<template>
  <el-container class="home" >
    <el-aside width="200px">
        <el-menu router active-text-color="yellow" text-color="white"  background-color="#292d3e"   default-active="/manager">
          <el-menu-item index="/manager">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/app">
            <el-icon><Coin /></el-icon>
            <span>app</span>
          </el-menu-item>
          <el-menu-item index="/user">
            <el-icon><User /></el-icon>
            <span>用户</span>
          </el-menu-item>
          <el-menu-item index="/cdk">
            <el-icon><Crop /></el-icon>
            <span>激活码</span>
          </el-menu-item>
        </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">
        <el-button type="primary" >导航栏</el-button>
        <el-button type="primary" >退出</el-button>
      </el-header>
      <el-main class="main">
          <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>

</script>

<style scoped lang="scss">
.home{
  height: 100%;

  .el-aside,.el-menu{
    height: 100%;
    background-color: #292d3e;
  }
  .header{
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    height: 100px;
  }
  .main{
    height: 100%;
  }
}

</style>