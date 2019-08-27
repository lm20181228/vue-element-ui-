<template>
	<div>
		<!--我的歌单-->
		<div>
			<el-row :gutter="24" class="sheetTitle">
				<el-col :span="12">
					<span>歌单 {{mySheet.length}}</span>
				</el-col>
				<el-col :span="12" class="text-right">
					<span>共被收藏1次</span>
				</el-col>
			</el-row>
			<!--内容分割-->
			<div class="sheetList">
				<el-row :gutter="24" class="sheet" v-for="(item) in mySheet.list">
					<el-col :span="4" class="sheetImg">
						<img :src="item.img" alt="" />
					</el-col>
					<el-col :span="20" class="sheetInfo"> 
						<p class="sheetName">{{item.name}}</p>
						<p class="sheetPlayTime">{{item.mun}}首，播放502次</p>
					</el-col>
				</el-row>
			</div>
			
		</div>
		<!--收藏歌单-->
		<div>
			<el-row :gutter="24" class="sheetTitle">
				<span>收藏歌单 {{colSheet.length}}</span>
				
			</el-row>
			<!--内容分割-->
			<div class="sheetList">
				<el-row :gutter="24" class="sheet" v-for="(item) in colSheet.list">
					<el-col :span="4" class="sheetImg">
						<img :src="item.img" alt="" />
					</el-col>
					<el-col :span="20" class="sheetInfo"> 
						<p class="sheetName">{{item.name}}</p>
						<p class="sheetPlayTime">{{item.mun}}首，by{{item.author}}，播放502次</p>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mySheet:{},
				colSheet:{}
			}
		},
		mounted(){
			this.$axios.get("/static/json/songSheet.json")
			.then((res)=>{
				let sheet=res.data.data;
				this.mySheet=sheet.songsLists;
				this.colSheet=sheet.collectionSongsLists;
				console.log(this.mySheet)
			})
		},
		method:{
			
		}
	}
</script>

<style scoped>
	.sheetTitle{
		padding: 10px 0;
		font-size: 14px;
	}
	.sheet{
		height: 50px;
		/*line-height: 50px;*/
		/*border: 1px solid red;*/
		margin: 10px 0!important;
	}
	.sheetInfo{
		/*border: 1px solid red;*/
	}
	.sheetImg{
		height: 50px;
	}
	.sheetImg>img{
		height: 50px;
		width: 50px;
		border-radius: 10px;
	}
	.sheetName{
		
		font-size: 14px;
		line-height: 24px;
		
	}
	.sheetPlayTime{
		
		font-size: 12px;
		line-height: 24px;
		color: #9e9e9e;
	}
</style>