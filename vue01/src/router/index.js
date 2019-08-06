import Vue from 'vue'
import Router from 'vue-router'
import indexTop from '@/components/index'
import '../../static/css/index.css'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:"/",
			name:"navTop",
			component:indexTop
		}
	]
})
