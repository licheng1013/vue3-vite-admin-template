<template>
    <el-container class="home" >
      <el-aside  :class="animateBackInRight">
        <el-menu router active-text-color="yellow" text-color="white" background-color="#292d3e"
                 :default-active="store.path"  @select="store.setSelIndex">
          <el-menu-item v-for="(v,index) in menus" :index="v.path" :class="animBounceInDown">
            <el-icon>
              <component :is="v.icon"></component>
            </el-icon>
            <span @click="onAnimBounce($event)">{{ v.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container style="display: flex;flex-direction: column">
        <div  class="header">
          <el-card :class="animBounceInDown" >
            <VueVersion></VueVersion>
            <el-button type="primary" @click="onAnimBounce($event)">导航栏</el-button>
            <el-button type="primary" @click="onLogout">退出</el-button>
          </el-card>
        </div>
        <RouterView class="main"/>
      </el-container>
    </el-container>


</template>

<script setup>
// 动画
import {animBounceInDown, onAnimBounce, animateBackInRight} from "@/assets/anim"

import router from "@/router";
import {logout} from "@/stores/auth";
import {useStore} from "@/stores/counter";
import VueVersion from "@/components/version/VueVersion.vue";
const store =  useStore()

// 根据数组来渲染路由
let menus = []
for (let route of router.options.routes) {
  if (route.meta) {
    menus = route.children
    break
  }
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

  .el-aside{
    width: 150px;
  }

  .el-aside,.el-menu {
    height: 100%;
    background-color: #292d3e;
  }

  // 设置内边距
  .header,.main{
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
  }
  // 这里必须要设置，否则会出现滚动条
  .main{
    margin-bottom: 16px;
  }

  .header {
    .el-card {
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: end;
      align-items: center;
    }
  }

}

</style>