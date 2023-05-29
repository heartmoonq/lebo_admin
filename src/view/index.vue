<!--
 * @Author: XiuJie_Lin xiujie_lin@lebo.cn
 * @Date: 2023-05-26 15:40:36
 * @LastEditors: XiuJie_Lin xiujie_lin@lebo.cn
 * @LastEditTime: 2023-05-28 15:27:15
 * @FilePath: \lebo_admin\src\view\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<script setup lang="ts">
import Menu from '@/components/Menu.vue';


import { useStore } from '@/store';
const baseApi = import.meta.env.VITE_APP_API_BASE_URL;
const b = '6'
const store = useStore()
store.setToken('token')
store.setRole('user')


</script>

<template>
  <div>
    <Menu />
    首页
    {{ baseApi }}
    {{ b }}
    {{ store.$state.role }}
  </div>
</template>


<style lang="scss" scoped></style>