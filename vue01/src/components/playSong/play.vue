<template>
	<div class="playSong" v-show="isPlay">
		<el-header>
			<el-row class="palyHeader" :gutter="24">
				<el-col class="" :span="4">
					<span @click="isPlay=false">
						<!--退出-->
						<i class="el-icon-back infoIcon"></i>
					</span>
				</el-col>
				<el-col :span="16" class="playSongInfo">
					<p class="songName">歌词名称</p>
					<span class="songAuthor">作者&gt;</span>
				</el-col>
				<el-col :span="4" class="text-right">
					<i class="el-icon-share"></i>
				</el-col>
			</el-row>
		</el-header>
		<el-main>
			内容
		</el-main>
		<el-footer>
			
			<div class="">
				<el-row type="flex" class="row-bg" justify="space-between">
					<el-col :span="4">
						收藏
					</el-col>
					<el-col :span="4">
						下载
					</el-col>
					<el-col :span="4">
						分享
					</el-col>
					<el-col :span="4">
						评论
					</el-col>
					<el-col :span="4">
						详情
					</el-col>
				</el-row>
			</div>
		</el-footer>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				isPlay:false
			}
		},
		methods:{
			show(){
				this.isPlay=true;
			},
			hide(){
				this.isPlay=false;		
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
		background: #fff;
		z-index: 5;
	}
	.palyHeader{
		height: 60px;
		line-height: 60px;
		border: 1px solid red;
	}
	.playSongInfo{
		line-height: 20px;
	}
/*	.playSongInfo>.songName{
	
	}*/
	.playSongInfo>.songAuthor{
		font-size: 12px;
	}
</style>