import Vue from 'vue'
import App from './App.vue'
import { genRouter } from './router'
import store from './store'
import singleSpaVue from 'single-spa-vue'
import packageJson from '../package.json'

const elementId = '#' + packageJson.name
const vueOptions = {
  el: elementId,
  // router,
  store,
  render: h => h(App)
}

Vue.config.productionTip = false



const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})


// 导出生命周期对象

// 启动时
export const bootstrap = [
  vueLifecycles.bootstrap,
  // hooks, 接受顶层变量, 配置 router, store
  (props) => {
    console.log(props)
    // 配置路由
    const router = genRouter(props.rootPath)

    vueOptions.router = router
    return Promise.resolve(props)
  }
] 

export const mount = vueLifecycles.mount // 挂载时
export const unmount = vueLifecycles.unmount // 卸载时

export default vueLifecycles




if (process.env.NODE_ENV === 'production') {
  /* 如果不是single-spa模式, public/index.html */
  if (!window.singleSpaNavigate) { // 
    new Vue(vueOptions)
  }
}

// 开发环境测试, 顶层应用可参考此配置, single-spa 无需动态导入
else {
  const rootPath = '/testal'
  import('single-spa').then(({ registerApplication, start }) => {
    registerApplication(
      packageJson.name,
      () => Promise.resolve(window[packageJson.name]),
      (l) => l.pathname.startsWith(rootPath),
      {
        rootPath
      }
    )

    start()
  })
}

