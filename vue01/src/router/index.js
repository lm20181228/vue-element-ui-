import Vue from 'vue'
import Router from 'vue-router'

import myMusic from '@/components/my/myMusic'
import recentlySongs from '@/components/my/recentlySongs'
import find from '@/components/find/find'
import editUser from '@/components/user/editUser'
import Header from '@/components/header'
import Footer from '@/components/footer'
import user from '@/components/user/user'
import userSong from '@/components/user/userSongs'
import dynamic from '@/components/user/dynamic'
import about from '@/components/user/about'
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
			path:"/recentSongs",
			name:"最近播放音乐",
			components:{
	            default: recentlySongs, //默认省略不写name的情况
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
			path:"/user/",
			name:"个人信息",
			components:{
	            default: user, //默认省略不写name的情况
	            footer: Footer
			},
			children:[
				{
					path:'',
					component:userSong
				},
				{
					path:'userSongs',
					name:"个人中心-歌单列表",
					component:userSong
				},{
					path:'dynamic',
					name:"个人中心-动态",
					component:dynamic
				},{
					path:'about',
					name:"个人中心-关于我",
					component:about
				},{
					path:"editUser",
					name:"编辑个人信息",
					component:editUser
				}
						
			]
		}
	]
})
