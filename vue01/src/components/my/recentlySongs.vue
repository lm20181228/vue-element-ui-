<template>
	<div>
		<el-row :gutter="24" class="title">
			<el-col :span="3" class="text-center">
				<router-link to="/myMusic">
					<i class="el-icon-back" ></i>
				</router-link>
			</el-col>
			<el-col :span="16">
				最近播放
			</el-col>
			<el-col :span="5">
				清空
			</el-col>
		</el-row>
		<el-row :gutter="24" class="tab">
			<router-link to="">
				<el-col :span="8" class="text-center">
					<span>歌曲</span>
				</el-col>
			</router-link>
			<router-link to="">
				<el-col :span="8" class="text-center">
					<span>直播</span>
				</el-col>
			</router-link>
			<router-link to="">
				<el-col :span="8" class="text-center">
					<span>视频</span>
				</el-col>
			</router-link>
		</el-row>
		<div class="recentlyContent">
			<el-row class="songTitle">
				<el-col :span="18">
					<i class="el-icon-video-play"></i>
					<span>播放全部</span>
					<span class="songsNum">（共111首）</span>
				</el-col>
				<el-col :span="6" class="text-right">
					<span @click="select()"><i class='el-icon-s-fold'></i>多选</span>
				</el-col>
			</el-row>
			<el-row :gutter="24" class="song" v-for="(item,i) in songs">
				<el-col :span="16" class="songName">
					<p class="songN">{{item.name}}</p>
					<p class="songA">{{item.author}}-专辑名称</p>
				</el-col>
				<el-col :span="8" class="operateBtn">
					<span><i class="el-icon-video-camera-solid"></i></span>
					<span @click="operate(item.id)">:</span>
				</el-col>
			</el-row>
		</div>
		<el-drawer :visible.sync="drawer" :direction="direction" :show-close="showClose">
			<div class="frameTitle">
				<el-row>
					<el-col :span="4">
						<img :src="frameTitle.songImg" alt="" />
					</el-col>
					<el-col :span="20">
						<p>歌曲：{{frameTitle.name}}</p>
						<p>{{frameTitle.author}}</p>
					</el-col>
				</el-row>
				<div>
					<el-row v-for="(item,i) in operates">
						<el-col>
							<i :class="item.icon"></i>
							<span>{{item.name}}</span>
						</el-col>
					</el-row>
				</div>
			</div>
		</el-drawer>
		<manage ref="manage" ></manage>
		<router-view class="main" name="footer"></router-view>
	</div>
</template>

<script>
	import manage from "../songSheet/manageSheet";
	export default {
		data(){
			return {
				songs:"",
				drawer:false,
				direction: 'btt',//弹框出现方向
				showClose:false,
				frameTitle:"",
				operates:[{
						"icon":"el-icon-play",
						"name":"下一首播放"	
					},{					
						"icon":"el-icon-add",
						"name":"收藏到歌单"	
					},{					
						"icon":"el-icon-down",
						"name":"下载"	
					},{					
						"icon":"el-icon-user",
						"name":"评论"	
					},{					
						"icon":"el-icon-ahsre",
						"name":"分享"	
					},{					
						"icon":"el-icon-user",
						"name":"歌手"	
					},{					
						"icon":"el-icon-delete",
						"name":"删除"	
					}
				],
			}
		},
		mounted(){
			this.$axios.get("./static/json/recentlyBroadcast.json")
				.then((response)=>{
					/*获取*/
					this.songs=response.data.songs					
				})
		},
		methods:{
			select:function(){
		      	/*let manage=this.clickList==0?"songsLists":"collectionSongsLists";*/
		      	this.$refs.manage.show("./static/json/recentlyBroadcast.json");
		      	/*this.drawer=false;*/
			},
			operate:function(id){
				console.log(id)
				this.frameTitle=this.songs[id];
				console.log(this.frameTitle);
				this.drawer=true;
			}
		},
		components:{
			manage:manage
		}
		
	}
</script>

<style>
	img{
		width: 100%;
	}
	.title{
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #333;
	}
	.tab{
		/*border: 1px solid red;*/
		height: 50px;
		line-height: 50px;
	}
	.recentlyContent{
		/*border: 1px solid red;*/
		height: calc(100vh - 170px);
	    overflow: auto;
	}
	.recentlyContent>.song{
		height: 60px;
	}
	.songTitle{
		height: 60px;
		line-height: 60px;
		padding: 0 6px;
	}
	.songName{
		width: auto!important;
	}
	.songName>p{
		height: 27px;
		line-height: 27px;
	}
	.songN{
		font-size: 18px;
	}
	.songA{
		font-size: 14px;
		color: #94989e;
	}
	.operateBtn{
		height: 60px;
	    line-height: 60px;
    	text-align: right;
    	float: right;
	}
	.operateBtn>span{
		display: inline-block;
		padding: 0 6px;
		color: #94989e;
	}
	.songsNum{
		color: #94989e;
		
	}
</style>