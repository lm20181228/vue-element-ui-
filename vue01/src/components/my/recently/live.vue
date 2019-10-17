<template>
	<div>
		<p class="text-center" v-if="playRecord">暂无播放记录</p>
		<el-row v-for="(item,i) in liveList" class="live">
			<el-col :span="10">
				<img :src="item.img" alt="" class="liveImg"/>
			</el-col>
			<el-col :span="14">
				<p>{{item.name}}</p>
				<p>{{item.createTime}} by {{item.author}}</p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				liveList:"",
				playRecord:false
			}
		},
		mounted(){
			this.$axios.get("./static/json/recentlyBroadcast.json")
			.then((response)=>{
				let result=response.data.live;
				if(result.length>0){
					this.liveList=result;
				}else{
					this.playRecord=true;
				}
			})
		}
	}
</script>

<style>
</style>