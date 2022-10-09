import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// ----- 自定义css
import './assets/index.css'
// ----- 动画css
import  'animate.css';

// ----- ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
app.use(ElementPlus,{
    locale: zhCn,
})
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// ----- Axios
import VueAxios from 'vue-axios'
import axios from "@/stores/axios";
app.use(VueAxios, axios)


// ----- Vue默认
app.use(createPinia())
app.use(router)
app.mount('#app')
