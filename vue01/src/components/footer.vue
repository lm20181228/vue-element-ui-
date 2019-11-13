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
					<i class="el-icon-video-pause" @click="playpause()"></i>
				</el-col>
				<el-col :span="3" class="song_icon">
					<!--更多操作-->
					<i class="el-icon-s-unfold"></i>
				</el-col>
			</el-row>
		</div>
		<!--播放页面-->
		<play ref="palySong" :songInfo="palySongInfo"></play>
	</el-footer>
</template>

<script>
	import play from "../components/playSong/play";
	export default{
		data(){
			return {
				audio:"",
				palySongInfo:""
			}
		},
		mounted(){
			this.$axios.get("./static/json/aduio.json")
			.then((response)=>{
				this.audio = response.data;
				
			})
		},
		methods:{
			playpause(){
				if(audio.paused){
					audio.play()
				}else{
					audio.pause()
				}
			},
			play(songInfo){
				console.log(songInfo)
				this.palySongInfo=songInfo;
				
				this.$refs.palySong.show();
			},
		},
		components:{
			play:play
		}
	}
</script>

<style>
</style>