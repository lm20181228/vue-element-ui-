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
					<audio :src="audio.audioUrl" controls="controls" id="audio" controlslist="nofullscreen" hidden="hidden"></audio>
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
					
					
				}//音频进度
				
			}
		},
		mounted(){
			this.$axios.get("./static/json/aduio.json")
			.then((response)=>{
				this.audio = response.data;
				
			})
			this.progress.duration = audio.duration;
			this.progress.currentTime = audio.currentTime;
		},
		methods:{
			playpause(){
				this.progress.duration = this.conversionTime(audio.duration);
				this.progress.currentTime = this.conversionTime(audio.currentTime);
				
				if(audio.paused){
					audio.play()
				}else{
					audio.pause()
				}
			},
			play(songInfo){
				
				this.palySongInfo=songInfo;
				this.$refs.palySong.show();
			},
			conversionTime(time){
				var h,m,s;
				var time1 = Math.floor(time);
				console.log(time1);
				if(time1>=60){
					m = time1/60;
					s = (time1%60)*0.6
				}else{
					s = time1;
				}
				return m+":"+s;
			}
		},
		components:{
			play:play
		}
	}
</script>

<style>
</style>