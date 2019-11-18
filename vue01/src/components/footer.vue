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
					<audio :src="audio.audioUrl" controls="controls" id="audio1" controlslist="nofullscreen" hidden="hidden"></audio>
					<!--<audio controls="controls"  id="audio" autoplay="autoplay">
						<source :src="audio.audioUrl" type="audio/mpeg">
						Your browser does not support the audio tag.
					</audio>-->
				</el-col>
				<el-col :span="3" class="song_icon">
					<!--播放按键-->
					<i class="el-icon-video-play" @click="playpause()"></i>
				<!--	<i class="el-icon-video-pause" @click="playpause()"></i>-->
				</el-col>
				<el-col :span="3" class="song_icon">
					<!--更多操作-->
					<i class="el-icon-s-unfold"></i>
				</el-col>
			</el-row>
		</div>
		<!--播放页面-->
		<play ref="palySong" :songInfo="palySongInfo" :playProgress="progress"></play>
	</el-footer>
</template>

<script>
	import play from "../components/playSong/play";
	export default{
		data(){
			return {
				audio:"",//音频信息
				palySongInfo:"",//
				progress:{
					
					
				},//音频进度
				flag:false,//是否正在播放，用于处理播放进度条
				
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
				/*console.log("1")*/
				this.progress.duration = this.conversionTime(audio1.duration);
				this.progress.currentTime = this.conversionTime(audio1.currentTime);
			},
			playpause(){
				if(audio1.paused){
					audio1.play();
					this.flag=true;
					this.getDuration();
					this.durationSettime(this.flag);
				}else{
					audio1.pause();
					this.flag=false;
					this.durationSettime(this.flag);
				}
			},
			play(songInfo){
				this.palySongInfo=songInfo;
				this.$refs.palySong.show();
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
			durationSettime(flag){
				var _this = this;
				var time="";
				if(flag){
					clearInterval(time);
					time = setInterval(function(){
						_this.getDuration();
					},500)
				}else{
					clearInterval(time);
				}
				
				
			}
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