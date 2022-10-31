<template>
  <div class="login">

    <el-card :class="animBounceIn">
      <h2 style="margin-bottom: 42px">管理后台</h2>
      <el-form label-position="right" label-width="50px" :model="loginForm" size="large">
        <el-form-item label="账号">
          <el-input v-model="loginForm.username"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"/>
        </el-form-item>
        <el-button type="primary" size="large" @click="onLogin">登入</el-button>
      </el-form>
    </el-card>

  </div>
</template>

<script setup>
import {animBounceIn} from "@/components/anim/anim";
import {reactive} from "vue";
import router from "@/router";
import {login} from "@/stores/auth";
import {useStore} from "@/stores/counter";
const store = useStore()

let loginForm = reactive({
  username: "admin",
  password: "admin",
})

// 登入处理
let onLogin = () => {
  login("ok")
  router.push({path: store.path})
}

</script>

<style scoped lang="scss">
.login {
  background-color: #292d3e;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center; // 从上至下居中
  justify-content: center; // 左至右居中

  .el-card {
    text-align: center;
    width: 325px;
    height: 325px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .el-button {
      width: 100%;
    }
  }

}


</style>