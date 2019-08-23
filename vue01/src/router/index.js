import Vue from 'vue'
import Router from 'vue-router'

import myMusic from '@/components/my/myMusic'
import find from '@/components/find/find'
import sheetAuthor from '@/components/user/editUser'
import Header from '@/components/header'
import Footer from '@/components/footer'
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
			components:{
				 header: Header,
	            default: myMusic, //默认省略不写name的情况
	            footer: Footer
			}
			
			
		},{
			path:"/find",
			name:"推荐",
			components:{
				 header: Header,
	            default: find, //默认省略不写name的情况
	            footer: Footer
			}
		},{
			path:"/editUser",
			name:"编辑个人信息",
			component:sheetAuthor
		}
	]
})
