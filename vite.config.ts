/*
 * @Author: XiuJie_Lin xiujie_lin@lebo.cn
 * @Date: 2023-05-26 15:36:25
 * @LastEditors: XiuJie_Lin xiujie_lin@lebo.cn
 * @LastEditTime: 2023-05-27 20:40:05
 * @FilePath: \lebo_admin\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 自动导入vue中hook reactive ref等
import AutoImport from 'unplugin-auto-import/vite'
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      AutoImport({
        //安装两行后你会发现在组件中不用再导入ref，reactive等
        imports: ['vue', 'vue-router'],
        //存放的位置
        dts: 'src/auto-import.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        // 引入组件的,包括自定义组件
        // 存放的位置
        dts: 'src/components.d.ts',
        resolvers: [ElementPlusResolver()],
      }),
      vue(),
    ],
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
})

// export default defineConfig({
// resolve: {
//   alias: {
//     '@': resolve(__dirname, 'src'),
//   },
// },
// plugins: [
//   vue(),
//   AutoImport({
//     //安装两行后你会发现在组件中不用再导入ref，reactive等
//     imports: ['vue', 'vue-router'],
//     //存放的位置
//     dts: 'src/auto-import.d.ts',
//     resolvers: [ElementPlusResolver()],
//   }),
//   Components({
//     // 引入组件的,包括自定义组件
//     // 存放的位置
//     dts: 'src/components.d.ts',
//     resolvers: [ElementPlusResolver()],
//   }),
// ],
// })
