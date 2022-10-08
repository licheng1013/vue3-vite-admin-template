import { defineStore } from 'pinia'
import {ref} from "vue";
// 保存页面载入
export const useStore = defineStore('store',  () =>{
  const path = ref("/manager")
  return {path}
})


