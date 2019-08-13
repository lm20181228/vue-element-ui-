<template>
	<div >
		<el-container>
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
			<el-main id="contentMain" class="contentMain">
				
				<keep-alive>
			      	<router-view ></router-view>
			    </keep-alive>
			</el-main>
			<el-footer class="fixedFooter fixedPosistion">
				<el-row :gutter="24">
					<el-col :span="4" class="song_portrait">
						<img src="../static/img/my/wangyiyun.png" alt="歌曲头像" />
					</el-col>
					<el-col :span="14" class="footer_songInfo">
						<p class="song_name">《逆风》--广播剧《破云》主题曲</p>
						<p>Mario</p>
						<!--controls 是否展示播放按键-->
						<audio controls="controls"  autoplay="autoplay">
							<source src="song.mp3" type="audio/mpeg">
							Your browser does not support the audio tag.
						</audio>
					</el-col>
					<el-col :span="3" class="song_icon">
						<!--播放按键-->
						<i class="el-icon-video-play"></i>
						<i class="el-icon-video-pause" ></i>
					</el-col>
					<el-col :span="3" class="song_icon">
						<!--更多操作-->
						<i class="el-icon-s-unfold"></i>
					</el-col>
				</el-row>
			</el-footer>
		</el-container>
		<!--用户信息侧边栏部分S-->
		<el-drawer direction="ltr" :visible.sync='userInfoDrawer' class="leftCon" :show-close="showClose" size="80%">
			<el-container class="userInfo">
				<el-header>
					<!--头像-->
					<img src="../static/img/bgPic.jpg" class="userPortrai" alt="" />
					<!--用户姓名-->
					<p class="userName">用户姓名</p>
					<!--等级-->
				</el-header>
				<el-main class="userMain">
					中心内容
				</el-main>
				<el-footer class="fixedFooter userFooter">
					脚本文件
				</el-footer>
			</el-container>
		</el-drawer>
		<!--用户信息侧边栏部分E-->
	</div>
</template>

<script>
	/*头部栏的选中状态应该由最外部的页面控制*/
 	/*播放按钮的状态应该由最外部的页面控制，将状态由父级传递给子页面*/
	export default{
	 	data(){
	 		return{
	 			userInfoDrawer:false,
	 			showClose:false
	 		}
	 	},
	 	method:{
	 		
	 	}
	}
</script>

<style>

</style>