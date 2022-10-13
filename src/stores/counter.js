import {defineStore} from 'pinia'
import {ref} from "vue";

const indexKey = "indexKye"

// 保存页面载入
export const useStore = defineStore('store', () => {
    // 对于页面刷新，而菜单路由也改变的操作
    let item = window.sessionStorage.getItem(indexKey);
    if (item === null) {
        item = "/manager"
    }
    const path = ref(item)
    const setSelIndex = (v) => {
        path.value = v
        window.sessionStorage.setItem(indexKey, v)
    }
    return {path, setSelIndex}
})


// 面包屑
export const navBarStore = defineStore('navBar',()=>{
    const menus = ref([]);
    return {menus}
})




