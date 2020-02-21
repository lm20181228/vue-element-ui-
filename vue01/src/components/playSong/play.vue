<template>
	<div class="playSong" v-if="enterPlay" >
		<el-header>
			<el-row class="palyHeader" :gutter="24">
				<el-col class="" :span="4">
					<span @click="enterPlay=false">
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
								<p class="time" >{{currentTime}}</p>
							</el-col>
							<el-col :span="16">
								<div class="pressBack">
									<span class="processBar"><i class="controller" @touchstart="mousedown" @touchmove="mousemove" @touchend="mouseup"></i></span>
								</div>
							</el-col>
							<el-col :span="4">
								<p class="time">{{duration}}</p>
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
						<i :class="playStyle" @click="play()"></i>
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
	import edit from '../songSheet/editSongSheet';
	import putSong from "../../../static/js/getSongData.js";
	import $ from 'jquery';
	export default {
		data(){
			return{
				enterPlay:false,
				currentTime:"00:00",
				duration:"00:00",
				songData:"",
				isMouseDown:false,
				mouseX:0,
				getCurTime:0,
				playStyle:"el-icon-video-play",
			}
		},
		methods:{
			show(){
				this.enterPlay=true;
				if(this.playProgress.playing){
					this.getTime(true);
				}else{
					this.getTime(false);
				}
				this.duration = this.conversionTime(this.playProgress.duration);
			},
			hide(){
				this.enterPlay=false;	
				this.getTime(false);	
			},
			play(){
				// this.$emit('isPlay');
				putSong.$emit('isPlay');	
				if(audio1.paused){
					// audio1.play();
					this.getTime(false);
				}else{
					// audio1.pause();
					this.getTime(true);
				}
			},
			conversionTime(time){
				var h = 0,m = 0,s = 0;
				var time1 = Math.floor(time);
				if(time1>=60){
					m = Math.floor(time1/60);
					s = Math.floor((time1%60)*0.6)
				}else{
					s = time1;
				}
				
				return this.patchPosition(m)+":"+this.patchPosition(s);
			},
			patchPosition(num){
				if(num<10){
					num='0'+num;
				}
				return num;
			},
			getTime(flag){
				if(flag){
					this.playStyle = "el-icon-video-pause";
					if(this.playProgress.end){
						this.getTime(false);
					}
					clearInterval(this.songData);
					this.songData=setInterval(()=>{
						this.currentTime = this.conversionTime(this.playProgress.currentTime);
						this.duration = this.conversionTime(this.playProgress.duration);
						this.pressBack(this.playProgress.currentTime,this.playProgress.duration)
					},500)
				}else{
					
					this.playStyle = "el-icon-video-play";
					clearInterval(this.songData);
				}
			},
			pressBack(currenTime,duration){
				var passBackW = $(".pressBack").width();
				var processBarLeft = passBackW*(currenTime/duration);
				$(".processBar").css("width",6+processBarLeft);
				$(".controller").css("left",processBarLeft);
			},
			mousedown(e){
				// e.preventDefault();
				this.getTime(false);
				this.isMouseDown = true;
				var touch = e.touches[0];
					var bbox = $(".pressBack")[0].getBoundingClientRect().left;
					var offsetLeft = touch.pageX-bbox;
			},mousemove(e){
				if(this.isMouseDown){
					var touch = e.touches[0];
					var bbox = $(".pressBack")[0].getBoundingClientRect().left;
					this.mouseX = touch.pageX-bbox;
					
					if(this.mouseX<=0){
						this.isMouseDown = false;
						this.mouseX = 0;
					}else if(this.mouseX>= $(".pressBack").width()){
						this.mouseX = $(".pressBack").width();
						this.isMouseDown = false;
					}else{
						$(".processBar").css("width",6+this.mouseX);
						$(".controller").css("left",this.mouseX);
					}
					this.getCurTime = (this.mouseX/$(".pressBack").width())*this.playProgress.duration;
					this.currentTime = this.conversionTime(this.getCurTime);
				}
			},mouseup(e){
				if(this.isMouseDown){
					putSong.$emit('getMsgFormSon',this.getCurTime);	
					// this.$emit('func',this.getCurTime);
				}
				this.getTime(true);
				this.isMouseDown = false;
			}
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
		z-index: 6;
		
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
		height: 6px;
		width: 6px;
		margin-top: -3px;
		/* margin-left: -5px; */
		border-radius: 10px;
		background: red;
	}
	.controller{
		display: inline-block;
		width: 12px;
		height: 12px;
		background: #fff;
		border-radius: 50%;
		position: absolute;
		left: 0px;
		border: 1px solid red;
		top: 50%;
		margin-top: -6px;
	}
	.time{
		font-size: 12px;
		height: 10px;
	}
</style>