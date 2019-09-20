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
				<div v-for="(item,i) in mySheet.list" @click="clickList=0,selectSheet(item, i,$event)">	
					<el-row :gutter="24" class="sheet" >
						<el-col :span="4" class="sheetImg" >
							<img :src="item.img" alt="" />
						</el-col>
						<el-col :span="20" class="sheetInfo" > 
							<p class="sheetName" >{{item.name+i}}</p>
							<p class="sheetPlayTime">{{item.mun}}首，播放502次</p>
						</el-col>
					</el-row>
				</div>
				
			</div>
			
		</div>
		<!--收藏歌单-->
		<div>
			<el-row :gutter="24" class="sheetTitle">
				<span>收藏歌单 {{colSheet.length}}</span>
				
			</el-row>
			<!--内容分割-->
			<div class="sheetList">
				<div v-for="(item,i) in colSheet.list" @click="clickList=1,selectSheet(item, i,$event)">
					<el-row :gutter="24" class="sheet" >
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
		<songSheet  :songSheet="selectedSongSheet" ref="songSheets" class="songSheets"></songSheet>
	</div>
</template>

<script>
	import songSheet from '../songSheet/songSheet';
	export default{
		data(){
			return{
				mySheet:{},
				colSheet:{},
				clickList:0,
			 	selectedSongSheet: {},//选中的歌单，
			}
		},
		methods:{
			selectSheet(sheet,index, event) { // 设置选中的商品以便传递给 sheet组件
	       		/*console.log(event._constructed)
		        if (!event._constructed) {
		          return;
		        }*/
		        this.selectedSongSheet = sheet;
		        //this.$refs.ref.method
		        this.$refs.songSheets.show(); // 调用 子组件 sheet 的show方法
		        this.$refs.songSheets.getSongs(index,this.clickList); // 调用 子组件 sheet 的getSongs方法
      		},
		},
		mounted(){
			this.$axios.get("./static/json/songSheet.json")
			.then((res)=>{
				let sheet=res.data.data;
				this.mySheet=sheet.songsLists;
				this.colSheet=sheet.collectionSongsLists;
			})
		},
		components:{
	    	songSheet: songSheet // 注册food组件
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
	.sheetInfo>.sheetName{
		font-size: 16px;
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