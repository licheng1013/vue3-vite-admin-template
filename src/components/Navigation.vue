<template>
  <div class="navBar">
    <div v-for="(i,index) in navBar.menus">
      <el-button-group>
        <el-button class="routerBtn" size="large" @click="onChange(i.path,$event)"
                   :class="use.path !== i.path || 'btnColor' "
                   :type="use.path === i.path ? 'primary':'info'">{{i.name }}
        </el-button>
        <el-button class="delBtn"   size="large"  type="danger" icon="Delete" circle @click="onDelete(index)" />
      </el-button-group>
    </div>
  </div>
</template>

<script setup>
import {navBarStore, useStore} from "@/stores/counter";
import router from "@/router";
import {onAnimBounce} from "@/assets/anim";

const use = useStore()
const navBar = navBarStore()

const onChange = (v, e) => {
  onAnimBounce(e)
  use.path = v;
  use.refresh = new Date().getTime()
  router.push({path: use.path})
}

const onDelete = (v) => {

  use.remove(v)
  if (v > 0) {
     use.path = navBar.menus[v-1].path
     use.refresh = new Date().getTime()
     router.push({path: use.path})
  }
}

</script>

<style scoped lang="scss">
.navBar {
  align-items: center;
  height: 100%;
  display: flex;
  overflow: hidden;
  width: 100%;


  .btnColor{
    color: yellow;
  }

  .delBtn{
    height: 35px;
    width: 5px;
  }

  .routerBtn {
    height: 35px;
    width: 75px;
    margin-left: 16px;
  }
}

</style>