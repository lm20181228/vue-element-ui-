import Vue from 'vue'
import Router from 'vue-router'

import myMusic from '@/components/my/myMusic'/*我的*/
import recent from '@/components/my/recentlySongs'/*最近播放*/
import song from '@/components/my/recently/song'/*最近播放-歌曲*/
import live from '@/components/my/recently/live'/*最近播放-直播*/
import video from '@/components/my/recently/video'/*最近播放-视频*/
import find from '@/components/find/find'/*推荐*/
import editUser from '@/components/user/editUser'/*用户编辑*/
import Header from '@/components/header'/*首页头部*/
import Footer from '@/components/footer'/*首页尾部播放模块*/
import user from '@/components/user/user'/*用户*/
import userSong from '@/components/user/userSongs'/*用户-音乐*/
import dynamic from '@/components/user/dynamic'/*用户-动态*/
import about from '@/components/user/about'/*用户-关于我*/
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
			path:"/recent/",
			name:"最近播放音乐",
			components:{
	            default: recent, //默认省略不写name的情况
	            footer: Footer
			},
			children:[{
				path:'',
				component:song
			},{
				path:'song',
				component:song
			},{
				path:'live',
				component:live
			},{
				path:'video',
				component:video
			}]
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
