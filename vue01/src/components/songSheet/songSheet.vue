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
					<router-link to="/user/editUser">
						<p class="author" @click="sheetAuthor()">
							<img :src="songSheet.img" alt="" />
							<span>{{songSheet.author}}&gt;</span>
						</p>
					</router-link>
					
					<!--编辑信息-->
					<div class="editer" @click="editFun()"> 
						<span class="editerDesc" >
							{{songSheet.desc||"编辑信息"}}
						</span>
						<span >
							&gt;
						</span>
					</div>
					
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
						<span>播放全部（共{{songsList.length}}首）</span>
					</el-col>
				</el-row>
			</div>
			<div class="">				
				<div v-for="(item,index) in songsList.songs" :key="index" class="song" @click="play(item)" >
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
		<!--播放页面-->
		<!-- <play ref="palySong" :songInfo="palySongInfo" :playProgress="progress"></play> -->
		<!--编辑页面-->
		<edit ref="edit"> </edit>
	</div>
</template>

<script>
	/*获取演唱页面的组件*/
	import play from "../playSong/play";
	import edit from "../songSheet/editSongSheet";
	import putSong from "../../../static/js/getSongData.js";
	import $ from 'jquery';
	export default{
		data(){
			return {
				audio:"",//音频信息
				isShowSong:false,
				songsList:{},//获取歌单里面的歌曲列表信息
				songSheet:{},//获取歌单的基本信息，不包含歌单歌曲
				palySongInfo:{},
				progress:{
					end:false,
				},//音频进度
				sheetIndex:{},
				isSelected:{
					selected:false,
					id:0,
				},
				selectStyle:"selectedStyle",
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
				if(this.isSelected.selected === true && (this.palySongInfo.id==this.isSelected.id)){
					// &&(this.palySongInfo.id==this.selected.id)
					putSong.$emit('enterPlayPage',this.palySongInfo);	
					// this.$refs.palySong.show();
				}else{
					this.isSelected.selected = true;
					this.isSelected.id = this.palySongInfo.id;
				}
				putSong.$emit('getSongData',this.palySongInfo);	
			},
			getSongs(index,clickList){
				/*保存歌曲信息*/
				this.sheetIndex.index=index;
				this.sheetIndex.type=clickList;
				/*获取歌单播放信息*/
				this.$axios.get("./static/json/sheetSongs.json")
				.then((response)=>{
					this.songsList=response.data.data[index];
				})
				/*获取歌单基本信息。不包含歌单里面的歌曲*/
				this.$axios.get("./static/json/songSheet.json")
				.then((response)=>{
					let songList={};
					songList=(clickList==0?response.data.data.songsLists.list[index]:response.data.data.collectionSongsLists.list[index]);
					this.songSheet=songList;
				})
			},
			editFun(){
				/*编辑*/
				this.$refs.edit.show(this.sheetIndex);
			},
			sheetAuthor(){
				/*歌单创建者信息*/
			}
		},
/*		mounted(){
			
		},*/
	/*	props:{
			songSheet:{
				type:Object
			}
		},*/
		components:{
			play:play,
			edit:edit
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
	/*歌单信息部分*/
	.songInfoMoudel{
		padding: 60px 10px 10px;
		height: 200px;
	}
	.sheetInfo>.sheetName{
		font-size: 24px;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.author>img{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		vertical-align: middle;
	}
	.author>span{
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 14px ;
	}
	.editer{
		position: absolute;
		bottom: 20px;
		font-size: 12px;
	    width: 50%;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.editerDesc{
		display: inline-block;
		max-width: 80%;
		
	   /* display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;*/
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    vertical-align: sub;
	    font-size: 12px;
	}
	.songImg{
		height: 140px;
		line-height: 140px;
	}
	.songImg img{
		width: 100%;
		max-height: 100%;
		vertical-align: middle;
	}
	.operateBtns{
		text-align: center;
		padding: 8px 0;
	}
	/*歌曲列表*/
	.songsList{
	    background: #fff;
	    border-radius: 12px 12px 0 0;
		padding: 10px;
		min-height: calc(100vh - 350px);
	}
	.songsList .song{
		height: 50px;
		line-height: 50px;
	}
</style>