<template>
	<div v-if="isShowSong" ref="songSheet">
		<div class="songSheetTop">
			<el-row  :gutter="24">
				<el-col class="" :span="12">
					<span @click="isShowSong=false">
						<!--退出-->
						<i class="el-icon-back infoIcon"></i>
					</span>
					<span>
						歌单
					</span>
				</el-col>
				<el-col :span="12" class="songOperate">
					<span>
						<i class="el-icon-search infoIcon"></i>
					</span>
					<span class="infoIcon">
						:
					</span>
				</el-col>
			</el-row>
		</div>
		<!--歌单信息部分-->
		<div class="songInfoMoudel">
			<el-row :gutter="24" class="songSheetInfo">
				<el-col :span="10" class="songImg">
					<img :src="songSheet.img" alt="歌单图片" />
				</el-col>
				<el-col :span="14" class="sheetInfo">
					<!--歌单名称-->
					<p class="sheetName">{{songSheet.name}}</p>
					<!--歌单创造者-->
					<p class="author">
						<img :src="songSheet.img" alt="" />
						<span>作者名称&gt;</span>
					</p>
					<!--编辑信息-->
					<span class="editer">
						编辑信息&gt;
					</span>
				</el-col>
			</el-row>
			<el-row class="operateBtns" :gutter="24">
				<el-col :span="6">
					<i class="el-icon-chat-dot-round"></i>
					<p>评论</p>
				</el-col>
				<el-col :span="6">
					<i class="el-icon-share"></i>
					<p>分享</p>
				</el-col>
				<el-col :span="6">
					<i class="el-icon-download"></i>
					<p>下载</p>
				</el-col>
				<el-col :span="6">
					<i class="el-icon-folder-add"></i>
					<p>多选</p>
				</el-col>
			</el-row>
		</div>
		<div class="songsList">
			<div class="song">
				<el-row :gutter="24">
					<el-col :span="2">
						<i class="el-icon-video-play"></i>
					</el-col>
					<el-col :span="22">
						<span>播放全部（共19首）</span>
					</el-col>
				</el-row>
			</div>
			<div class="">				
				<div v-for="(item,index) in songsList" :key="index" class="song" @click="play(item)" >
					<el-row :gutter="24">
						<el-col :span="2" class="text-center">
							{{index}}
						</el-col>
						<el-col :span="20" class="songInfoCol">
							<span class="songName">{{item.name}}</span>
							<span class="songAuthor">{{item.author}}</span>
						</el-col>
						<el-col :span="2" class="text-center">
							<span>:</span>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
		<play ref="palySong" :songInfo="palySongInfo"></play>
	</div>
</template>

<script>
	/*获取演唱页面的组件*/
	import play from "../playSong/play";
	import $ from 'jquery';
	export default{
		data(){
			return {
				isShowSong:false,
				songsList:[{
					id:0,
					name:"歌曲1",
					author:"小栗旬",
					audioUrl:"../../../static/songs/画.mp3",
					songImg:"../../../static/img/wangyiyun.png",
				},{
					id:1,
					name:"两只老虎",
					author:"二哥精选",
					audioUrl:"../../../static/songs/无名之辈.mp3",
					songImg:"../../../static/img/bgPic.jpg"
				},{
					id:2,
					name:"小燕子",
					author:"儿歌精选",
					audioUrl:"../../../static/songs/画.mp3",
					songImg:"../../../static/img/wangyiyun.png"
				},{
					id:3,
					name:"送别",
					author:"毕业精选",
					audioUrl:"../../../static/songs/无名之辈.mp3",
					songImg:"../../../static/img/bgPic.jpg"
					
				},{
					id:4,
					name:"歌曲1",
					author:"小栗旬",
					audioUrl:"../../../static/songs/画.mp3",
					songImg:"../../../static/img/wangyiyun.png"
					
				},{
					id:5,
					name:"两只老虎",
					author:"二哥精选",
					audioUrl:"../../../static/songs/无名之辈.mp3",
					songImg:"../../../static/img/bgPic.jpg"
					
				},{
					id:6,
					name:"小燕子",
					author:"儿歌精选",
					audioUrl:"../../../static/songs/画.mp3",
					songImg:"../../../static/img/wangyiyun.png"
					
				},{
					id:7,
					name:"送别",
					author:"毕业精选",
					audioUrl:"../../../static/songs/无名之辈.mp3",
					songImg:"../../../static/img/bgPic.jpg"
					
				},{
					id:8,
					name:"歌曲1",
					author:"小栗旬",
					audioUrl:"../../../static/songs/画.mp3",
					songImg:"../../../static/img/wangyiyun.png"
					
				},{
					id:9,
					name:"两只老虎",
					author:"二哥精选",
					audioUrl:"../../../static/songs/无名之辈.mp3",
					songImg:"../../../static/img/bgPic.jpg"
					
				},{
					id:10,
					name:"小燕子",
					author:"儿歌精选",
					audioUrl:"../../../static/songs/画.mp3",
					songImg:"../../../static/img/wangyiyun.png"
					
				},{
					id:11,
					name:"送别",
					author:"毕业精选",
					audioUrl:"../../../static/songs/无名之辈.mp3",
					songImg:"../../../static/img/bgPic.jpg"
				}],
				palySongInfo:{}
			}
		},
		methods:{
			show(){
				this.isShowSong=true
			},
			hidden(){
				this.isShowSong=false
			},
			play(songInfo){
				this.palySongInfo=songInfo;
				
				this.$refs.palySong.show();
			}
		},
		
		props:{
			songSheet:{
				type:Object
			}
		},
		components:{
			play:play
		}
	}
	function scrollTop(){
		/*var t =document.documentElement.scrollTop||document.body.scrollTop;*/
		var t=$(".songSheets").scrollTop();
		var songsTop=$(".songInfoMoudel").height()+70;
		if(t>0){
			$(".songSheetTop").addClass("sheetTopBgcolor");
			if(songsTop-t<=60){
				console.log("到临界了。需要改变")
			}
		}else{
			$(".songSheetTop").removeClass("sheetTopBgcolor");
		}
	}
	scrollTop();
	$(".songSheets").on("touchmove",function(e){
		scrollTop();
	})
	/*document.addEventListener("touchmove", function(e){
		scrollTop();
	}, false);*/
	/*window.addEventListener("scroll",function(e){
	
		scrollTop();
	});*/
</script>
<style>
	.songInfoCol{
		line-height: 0;
	}
	.songName{
		height: 30px;
		line-height: 30px;
		display: inline-block;
    	width: 100%;
	}
	.songAuthor{
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		color: #666;
	}
</style>