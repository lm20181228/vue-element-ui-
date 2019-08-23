<template>
	<el-footer class="fixedFooter fixedPosistion">
		<el-row :gutter="24">
			<el-col :span="4" class="song_portrait">
				<img src="/static/img/my/wangyiyun.png" alt="歌曲头像" />
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
</template>

<script>
	
</script>

<style>
</style>