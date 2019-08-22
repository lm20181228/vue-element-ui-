import Vue from 'vue'
import Router from 'vue-router'

import myMusic from '@/components/my/myMusic'
import find from '@/components/find/find'
import sheetAuthor from '@/components/user/editUser'
import '../../static/css/index.css'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:"/",
			redirect: '/myMusic'
		},{
			path:"/myMusic",
			name:"我的音乐",
			component:myMusic
		},{
			path:"/find",
			name:"推荐",
			component:find
		},{
			path:"/editUser",
			name:"编辑个人信息",
			component:sheetAuthor
		}
	]
})
