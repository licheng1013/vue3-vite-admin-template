import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// ----- 自定义css
import './assets/index.scss'
// ----- 动画css
import  'animate.css';


// ----- Axios
import VueAxios from 'vue-axios'
import axios from "@/stores/axios";
app.use(VueAxios, axios)

// ----- ElementPlus
import {elementPlus} from "@/stores/element-plus"
elementPlus(app)

// ----- Vue默认
app.use(createPinia())
app.use(router)
app.mount('#app')
