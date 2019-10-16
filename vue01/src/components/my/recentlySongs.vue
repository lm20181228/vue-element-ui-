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
				<span @click="clear()">清空</span>
			</el-col>
		</el-row>
		<el-row :gutter="24" class="tab">
			<router-link to="/recent/song">
				<el-col :span="8" class="text-center">
					<span>歌曲 107</span>
				</el-col>
			</router-link>
			<router-link to="/recent/live">
				<el-col :span="8" class="text-center">
					<span>直播 0</span>
				</el-col>
			</router-link>
			<router-link to="/recent/video">
				<el-col :span="8" class="text-center">
					<span>视频 78</span>
				</el-col>
			</router-link>
		</el-row>
		<div class="recentlyContent">
			<router-view></router-view>
		</div>
		<!--清空询问弹框-->
		<el-dialog
		  :visible.sync="centerDialogVisible"
		  width="80%"
		  center>
		  <span>清空所有最近播放歌曲？</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="centerDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
		<router-view class="main" name="footer"></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				centerDialogVisible:false,
			}
		},
		methods:{
			clear:function(){
				this.centerDialogVisible=true;
			}
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
		border-bottom: 1px solid #dcdcdc;
	}
	.tab{
		height: 50px;
		line-height: 50px;
	}
	.recentlyContent{
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
	.frameTitle{
		padding: 6px 20px;
	}
	.operateList{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #dcdcdc;
	}
	.operateIcon{
		padding: 0 6px;
	}
	.drawerHeader{
		border-bottom: 1px solid #dcdcdc;
	}
	.drawerTitle{
		padding:0 6px;
	}
	.drawerTitle>p{
		height: 20px;
		line-height: 20px;
	}
</style>