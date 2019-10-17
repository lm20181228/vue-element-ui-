<template>
	<div>
		<p class="text-center" v-if="playRecord">暂无播放记录</p>
		<el-row v-for="(item,i) in videoList" class="video">
			<el-col :span="10">
				<img :src="item.img" alt="" class="videoImg"/>
			</el-col>
			<el-col :span="14">
				<p>{{item.name}}</p>
				<p class="videoCreate">{{item.createTime}} by {{item.author}}</p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				videoList:"",
				playRecord:false
			}
		},
		mounted(){
			this.$axios.get("./static/json/recentlyBroadcast.json")
			.then((response)=>{
				let video = response.data.video;
				if(video.length>0){
					this.videoList=response.data.video;
					this.playRecord = false;
				}else{
					this.playRecord = true;
				}
			})
		},
		methods:{
			
		}
	}
</script>

<style>
	.video{
		height: 80px;
	}
	.videoImg{
		width: 70%;
		border-radius: 10%;
	}
	.videoCreate{
		font-size: 12px;
		color: #94989e;
		height: 30px;
		line-height: 30px;
	}
</style>