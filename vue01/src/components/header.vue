<template>
	<div>
		<el-header class="fixedTop fixedPosistion">
			<el-row :gutter="24">
				<el-col :span="3" class="song_icon" >
					<i class="el-icon-s-fold" @click="userInfoDrawer=true"></i>
				</el-col>
				<el-col :span="9" >
					<router-link to="/myMusic" class="grid-content bg-purple">我的</router-link>
				<!--	<div class="grid-content bg-purple">我的</div>-->
				</el-col>
				<el-col :span="9">
					<router-link to="/find" class="grid-content bg-purple">推荐</router-link>
					
					<!--<div class="grid-content bg-purple">推荐</div>-->
				</el-col>
				<el-col :span="3">
					<i class="el-icon-search"></i>
				</el-col>
			</el-row>
		</el-header>
		<!--用户信息侧边栏部分S-->
		<el-drawer direction="ltr" :visible.sync='userInfoDrawer' class="leftCon" :show-close="showClose" size="80%">
			<el-container class="userInfo">
				<el-header class="userHeader">
					<router-link to="/user">
						<!--头像-->
						<img :src="user.headPortrait" class="userPortrai" alt="" />
						<!--用户姓名-->
						<p class="userName">{{user.name}}</p>
						<!--等级-->
					</router-link>
				</el-header>
				<el-main class="userMain">
					<div class="musicModule">
						<el-row :gutter="24">
							<el-col :span="6"><i class="el-icon-message moduleIcon"></i><span class="moduleName">我的消息</span></el-col>
							<el-col :span="6"><i class="el-icon-user moduleIcon"></i><span  class="moduleName">我的好友</span></el-col>
							<el-col :span="6"><i class="el-icon-goods moduleIcon"></i><span  class="moduleName">个性换肤</span></el-col>
							<el-col :span="6"><i class="el-icon-service moduleIcon"></i><span  class="moduleName">听歌识曲</span></el-col>
						</el-row>
					</div>
					<div v-for="(item,i) in userMoudel" :key="i" class="text item ">
					    	<i :class="item.icon"></i> <span>{{item.name}}</span>
					  	</div>
				</el-main>
				<el-footer class="fixedFooter userFooter">
					<el-row :gutter="24">
						<el-col :span="10"><i class="el-icon-moon"></i><span>夜间模式</span></el-col>
						<!--<el-col :span="10"><i class="el-icon-sunny"></i><span>日间模式</span></el-col>-->
						<el-col :span="7"><i class="el-icon-setting"></i><span>设置</span></el-col>
						<el-col :span="7"><i class="el-icon-switch-button"></i><span>退出</span></el-col>
					</el-row>
				</el-footer>
			</el-container>
		</el-drawer>
		<!--用户信息侧边栏部分E-->
	</div>
</template>
<!--<script src="/static/js/cookie.js"></script>-->
<script>
	
	var cookie= require('../../static/js/cookie.js');
	cookie.cookie.setCookie("userId",1)
	/*头部栏的选中状态应该由最外部的页面控制*/
 	/*播放按钮的状态应该由最外部的页面控制，将状态由父级传递给子页面*/
	export default{
	 	data(){
	 		return{
	 			userInfoDrawer:false,
	 			showClose:false,
	 			user:{},
	 			userMoudel:[
	 				{
	 					id:0,
	 					name:"定时停止播放",
	 					icon:"el-icon-timer"
	 				},{
	 					id:1,
	 					name:"扫一扫",
	 					icon:"el-icon-full-screen"
	 				},{
	 					id:2,
	 					name:"音乐闹钟",
	 					icon:"el-icon-alarm-clock"
	 				},{
	 					id:3,
	 					name:"音乐云盘",
	 					icon:"el-icon-cloudy"
	 				},{
	 					id:4,
	 					name:"加入网易音乐人",
	 					icon:"el-icon-headset"
	 				}	 			
	 			],
	 			/*存放最近播放，每次提取第一位放置在固定脚部栏，原开始想用seesion，不过应该这样也可以。*/
	 			latelyPlay:[{
	 				
	 			}]
	 			
	 		}
	 	},
	 	mounted(){
	 		let userId=cookie.cookie.getCookie("userId");
	 		/*let userId=0;*/
	 		this.$axios.get("./static/json/user.json")
	 		.then((response)=>{
	 			/*console.log(JSON.parse(response.data))*/
	 			/*let jsonData=JSON.parse(response.data);
	 			*/
	 			
	 			this.user=response.data.user[userId]
	 		})
	 	},
	 	method:{
	 		
	 	}
	}
	/*需要将部分本地播放信息存放在seesion中，*/
</script>

<style>
</style>