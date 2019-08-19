<template>
	<div class="playSong" v-if="isPlay" >
		<el-header>
			<el-row class="palyHeader" :gutter="24">
				<el-col class="" :span="4">
					<span @click="isPlay=false">
						<!--退出-->
						<i class="el-icon-back infoIcon"></i>
					</span>
				</el-col>
				<el-col :span="16" class="playSongInfo">
					<p class="songName">{{songInfo.name}}</p>
					<span class="songAuthor">{{songInfo.author}}&gt;</span>
				</el-col>
				<el-col :span="4" class="text-right">
					<i class="el-icon-share"></i>
				</el-col>
			</el-row>
		</el-header>
		<el-main class="playMain">
			<div>
				<!--歌曲图片-->
				<img :src="songInfo.songImg" alt="" />
			</div>
		</el-main>
		<el-footer class="playFooter">
			
			<div class="">
				<el-row type="flex" class="row-bg text-center songOPerate" justify="space-between">
					<el-col :span="4">
						<i class="el-icon-star-off"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-download"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-share"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-chat-line-round"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-warning-outline"></i>
					</el-col>
				</el-row>
				<audio :src="songInfo.audioUrl" controls="controls"></audio>
				<el-row type="flex" class="row-bg text-center songOPerate" justify="space-between">
					<el-col :span="4">
						<i class="el-icon-menu"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-caret-left"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-video-play"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-caret-right"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-s-unfold"></i>
					</el-col>
				</el-row>
			</div>
		</el-footer>
		<editSheet></editSheet>
	</div>
</template>

<script>
	/*获取编辑歌单信息的组件*/
	import edit from '../songSheet/editSongSheet'
	export default {
		data(){
			return{
				isPlay:false,
				
			}
		},
		methods:{
			show(){
				this.isPlay=true;
			},
			hide(){
				this.isPlay=false;		
			}
		},
		components:{
			editSheet:edit
		},
		props:{
			songInfo:{
				type:Object
			}
		}
	}
</script>

<style>
	.playSong{
		position:fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		
		background: #e4e4e4;
		z-index: 5;
		
	    display: flex;
	    flex-direction: column;
	    justify-content: space-around;
	}
	.palyHeader{
		height: 60px;
		line-height: 60px;
	}
	.playSongInfo{
		line-height: 28px;
	}
/*	.playSongInfo>.songName{
	
	}*/
	.playSongInfo>.songAuthor{
		font-size: 12px;
	}
	.songOPerate{
		padding: 16px 0;
	}
	.playMain{
		display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	}
	.playMain>div>img{
		width: 60vw;
		height: 60vw;
		border-radius: 50%;
	}
	.playFooter{
		height: 168px!important;
	}
	audio{
		width: 100%;
	}
</style>