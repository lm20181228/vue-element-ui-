<template>
	<div>
		<p class="text-center" v-if="playRecord">暂无播放记录</p>
		<div v-for="(item , i) in liveList">
			<p>zfasfasf098法法师</p>
		</div>
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