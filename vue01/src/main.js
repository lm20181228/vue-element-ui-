import Vue from 'vue'
import axios from 'axios'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './index'


Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
  el: '#app',
  router,//路由
 components: { App },//组件
	template: '<App/>'//模板
  //render: h => h(App) // 让我们可以通过JavaScript的方式去初始化一个模板,吧APP组件传入然后就可以去渲染 app 组件
})

