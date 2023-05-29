/*
 * @Author: XiuJie_Lin xiujie_lin@lebo.cn
 * @Date: 2023-05-26 15:36:25
 * @LastEditors: XiuJie_Lin xiujie_lin@lebo.cn
 * @LastEditTime: 2023-05-28 09:49:47
 * @FilePath: \lebo_admin\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'
//导入element的组件
import ElementPlus from 'element-plus'

//routes
import router from './router/index'
//pinia
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
//pinia
app.use(pinia)
//routes
app.use(router)
app.use(ElementPlus)
// app.use(axios)

app.mount('#app')
