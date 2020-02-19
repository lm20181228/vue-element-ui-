<template>
	<div>
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
		<el-row :gutter="24" class="song" v-for="(item,i) in songs" :key="i">
			<el-col :span="16" class="songName">
				<p class="songN">{{item.name}}</p>
				<p class="songA">{{item.author}}-专辑名称</p>
			</el-col>
			<el-col :span="8" class="operateBtn">
				<span><i class="el-icon-video-camera-solid"></i></span>
				<span @click="operate(item.id)">:</span>
			</el-col>
		</el-row>
		<el-drawer :visible.sync="drawer" :direction="direction" :show-close="showClose">
			<div class="frameTitle">
				<el-row class="drawerHeader">
					<el-col :span="4">
						<img :src="frameTitle.songImg" alt="" />
					</el-col>
					<el-col :span="20" class="drawerTitle">
						<p>歌曲：{{frameTitle.name}}</p>
						<p>{{frameTitle.author}}</p>
					</el-col>
				</el-row>
				<div>
					<div v-for="(item,i) in operates" class="operateList" :key="i">
						<i :class="item.icon" class="operateIcon"></i>
						<span>{{item.name}}</span>
					</div>
				</div>
			</div>
		</el-drawer>
		
		<manage ref="manage" ></manage>
	</div>
</template>

<script>
	import manage from "../../songSheet/manageSheet";
	export default {
		data(){
			return {
				songs:"",
				drawer:false,
				direction: 'btt',//弹框出现方向
				showClose:false,
				frameTitle:"",
				operates:[{
						"icon":"el-icon-video-play",
						"name":"下一首播放"	
					},{					
						"icon":"el-icon-folder-add",
						"name":"收藏到歌单"	
					},{					
						"icon":"el-icon-bottom",
						"name":"下载"	
					},{					
						"icon":"el-icon-chat-dot-square",
						"name":"评论"	
					},{					
						"icon":"el-icon-share",
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
		      	this.$refs.manage.show("./static/json/recentlyBroadcast.json");
			},
			operate:function(id){
				this.frameTitle=this.songs[id];
				this.drawer=true;
			}
		},
		components:{
			manage:manage
		}
	}
</script>

<style>
</style>