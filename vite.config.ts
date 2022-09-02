import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
export default defineConfig(()=>{
  return {
    plugins: [
      vue(),
      // element-plus 组件按需导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    // import { ElButton } from 'element-plus'
    //    ↓ ↓ ↓ ↓ ↓ ↓
    // import { ElButton } from 'element-plus'
    // import 'element-plus/es/components/button/style/css'
      ElementPlus()
    ],
    server:{
    open:true, 
    port:9527,
    hmr:true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, "src")
      },
      https: false,
      outDir: 'dist',
      base: './',
    },
  //   css: {
  //   // css预处理器
  //   preprocessorOptions: {
  //     scss: {
  //     // 此处修改为要被预处理的scss文件地址
  //       additionalData: '@import "./src/assets/scss/index.scss";'
  //     }
  //   }
  // },
    build: {
      rollupOptions: {
        output: {
          // 静态资源分拆打包
          // eslint-disable-next-line consistent-return
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          },
          // 静态资源分类打包
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  }
})
