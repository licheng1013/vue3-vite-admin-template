<template>
  <Layout>
    <el-container class="home" >
      <el-aside width="200px" :class="animateBackInRight">
        <el-menu router active-text-color="yellow" text-color="white" background-color="#292d3e"
                 :default-active="useStore().path">
          <el-menu-item v-for="(v,index) in menus" :index="v.path" :class="animBounceInDown">
            <el-icon>
              <component :is="v.icon"></component>
            </el-icon>
            <span @click="onAnimBounce($event)">{{ v.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-card :class="animBounceInDown">
            <el-button type="primary" @click="onAnimBounce($event)">导航栏</el-button>
            <el-button type="primary" @click="onLogout">退出</el-button>
          </el-card>
        </el-header>
        <el-main class="main">
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </Layout>


</template>

<script setup>
// 动画
import {animBounceInDown, onAnimBounce, animateBackInRight} from "@/assets/anim"

import router from "@/router";
import {logout} from "@/stores/auth";
import {useStore} from "@/stores/counter";
import Layout from "@/components/Layout.vue";

// 根据数组来渲染路由
let menus = []
for (let route of router.options.routes) {
  if (route.meta) {
    menus = route.children
    break
  }
}

// 选择菜单
const onSelMenu = (v) => {
  useStore().path = v.index
}

// 退出登入-这里可以做你的清理动作
const onLogout = () => {
  logout()
  router.push({path: "/"})
}


</script>

<style scoped lang="scss">
.home {
  height: 100%;

  .el-aside,.el-menu {
    height: 100%;
    background-color: #292d3e;
  }

  .header {
    margin-top: 8px;
    height: 100px;

    .el-card {
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
    }
  }

  .main {
    padding-top: 8px;
    height: 100%;
  }
}

</style>