<template>
	<el-footer class="fixedFooter fixedPosistion" >
		<div  @click="play(audio)">
			
		
			<el-row :gutter="24" >
				<el-col :span="4" class="song_portrait">
					<img :src="audio.songImg" alt="歌曲头像" />
				</el-col>
				<el-col :span="14" class="footer_songInfo">
					<p class="song_name">{{audio.name}}</p>
					<p>{{audio.author}}</p>
					<!--controls 是否展示播放按键-->
					<!--autoplay="autoplay"-->
					<audio :src="audio.audioUrl" controls="controls" id="audio1" controlslist="nofullscreen" hidden="hidden" @ended ="audioEnd()" @canplay="getDuration"></audio>
					<!--<audio controls="controls"  id="audio" autoplay="autoplay">
						<source :src="audio.audioUrl" type="audio/mpeg">
						Your browser does not support the audio tag.
					</audio>-->
				</el-col>
				<el-col :span="3" class="song_icon">
					<!--播放按键-->
					<i :class="playStyle"  @click.stop="playpause()"></i>
				<!--	<i class="el-icon-video-pause" @click="playpause()"></i>-->
				</el-col>
				<el-col :span="3" class="song_icon">
					<!--更多操作-->
					<i class="el-icon-s-unfold"></i>
				</el-col>
			</el-row>
		</div>
		<!--播放页面-->
		<!-- <play ref="palySong"  :songInfo="palySongInfo" :playProgress="progress" @func="getMsgFormSon" @isPlay="playpause"></play> -->
		<play ref="palySong"  :songInfo="palySongInfo" :playProgress="progress" ></play>
	</el-footer>
</template>

<script>
	import play from "../components/playSong/play";
	import putSong from "../../static/js/getSongData.js";

	export default{
		data(){
			return {
				audio:"",//音频信息
				palySongInfo:{},//
				progress:{
					end:false,
					playing:false
					
				},//音频进度
				//flag:false,//是否正在播放，用于处理播放进度条
				playStyle:"el-icon-video-play",
			}
		},
		mounted(){
			this.$axios.get("./static/json/aduio.json")
			.then((response)=>{
				this.audio = response.data;
				
			})
			this.progress.duration = 0;
			this.progress.currentTime = audio1.currentTime;
		},
		methods:{
			getDuration(){

				this.progress.duration = audio1.duration;
				this.progress.currentTime = audio1.currentTime;
			},
			// getFirstDuration(){
			// 	//在音频加载完成之后获取时长
			// 	this.progress.duration = audio1.duration;
			// 	this.progress.currentTime = audio1.currentTime;
			// },
			playpause(){
				if(audio1.paused){
					audio1.play();
					this.progress.playing=true;
					this.playStyle = "el-icon-video-pause";
					this.getDuration();
					this.durationSettime(this.progress.playing);
				}else{
					audio1.pause();
					this.playStyle = "el-icon-video-play";
					this.progress.playing=false;
					this.durationSettime(this.progress.playing);
				}
			},
			play(songInfo){
				this.palySongInfo=songInfo;
				this.$refs.palySong.show();
			},
			durationSettime(flag){
				var _this = this;
				var time="";
				clearInterval(time);
				if(flag){
					
					time = setInterval(function(){
						_this.getDuration();
					},500)
				}else{
					clearInterval(time);
				}	
			},
			audioEnd(){
				console.log("播放完毕！")
				this.durationSettime(false);
				this.progress.end=true;
			},
			
		},
		created(){
			putSong.$on('getSongData',(message)=>{
				//一些操作，message就是从top组件传过来的值
				this.audio = message;
				// this.playpause();
				// 初始化播放状态，默认是点击就播放音乐
				audio1.autoplay = "autoplay";
				this.progress.playing=true;
				this.playStyle = "el-icon-video-pause";
				this.getDuration();
				this.durationSettime(this.progress.playing);	
			}),
			putSong.$on('enterPlayPage',(message)=>{
				this.play(message);
			}),
			
			putSong.$on('getMsgFormSon',(message)=>{
				var x = document.getElementById("audio1");
				x.currentTime = message	
			}),
			putSong.$on('isPlay',()=>{
				this.playpause();
			})
		},
		components:{
			play:play
		},
		watch:{
			
		}
	}
</script>

<style>
</style>