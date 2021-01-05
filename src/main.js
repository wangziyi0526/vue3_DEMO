import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import "./assets/css/global.css";

const app = createApp(App)
app.use(ElementUI)
app.mount('#app')