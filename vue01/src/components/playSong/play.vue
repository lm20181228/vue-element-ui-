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
				<!--制作进度条-->
				<div class="text-center">
					<div class="process">
						
						<el-row :gutter="24">
							<el-col :span="4">
								<p class="time" >{{playProgress.currentTime}}</p>
							</el-col>
							<el-col :span="16">
								<div class="pressBack">
									<span class="processBar"></span>
								</div>
							</el-col>
							<el-col :span="4">
								<p class="time">{{playProgress.duration}}</p>
							</el-col>
						</el-row>
					</div>
				</div>
				<!--<audio :src="songInfo.audioUrl" controls="controls" id="audio" controlslist="nofullscreen" ></audio>-->
				<el-row type="flex" class="row-bg text-center songOPerate" justify="space-between">
					<el-col :span="4">
						<i class="el-icon-menu"></i>
					</el-col>
					<el-col :span="4">
						<i class="el-icon-caret-left"></i>
					</el-col>
					<el-col :span="4" >
						<i class="el-icon-video-play" @click="play()"></i>
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
				poss:{}
			}
		},
		methods:{
			show(){
				this.isPlay=true;
			},
			hide(){
				this.isPlay=false;		
			},
			play(){
				
				if(audio1.paused){
					audio1.play();
				}else{
					audio1.pause();
				}
				console.log(this.playProgress.currentTime);
				console.log(this.poss);
			}
			
		},
		mounted(){
			this.poss =this.playProgress;
		},
		components:{
			editSheet:edit
		},
		props:{
			songInfo:{
				type:Object
			},
			playProgress:{
				type:Object
			}
			
		},
		watch:{
			poss(value){
				console.og("safasf")
			}
		},
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
	.process{
		height: 10px;
		line-height: 10px;
	}
	
	.process>div{
		height: 10px;
	}
	.pressBack{
		position: relative;
		height: 6px;
		border-radius: 6px;
		background: #666;
	}
	.processBar{
		position: absolute;
		top: 50%;
		left: 0;
		display: inline-block;
		height: 10px;
		width: 10px;
		margin-top: -5px;
		margin-left: -5px;
		border-radius: 50%;
		background: red;
	}
	.time{
		font-size: 12px;
		height: 10px;
	}
</style>