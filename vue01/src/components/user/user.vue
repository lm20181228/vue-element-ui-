<template>
	<!--y用户板块页面-->
	<div class="usermodule">
		<el-row :gutter="24" class="top"> 
			<el-col :span="12">
				<i class="el-icon-back"></i>
			</el-col>
			<el-col :span="12" class="text-right">
				<i class="el-icon-share"></i>
			</el-col>
		</el-row>
		<div class="userContent">
			<div class="userContentTop">
				<el-row :gutter="24" class="userHead">
					<!--头像-->
					<el-col :span="12">
						<span class="userHeadP">
							<img src="/static/img/author/head/1.jpg" alt="" />
						</span>
					</el-col>
					<el-col :span="12" class="text-right">
						<span class="editButton">
					    	<i class="el-icon-edit"></i>	
						    编辑
						</span>
					</el-col>
				</el-row>
				<div class="userInfo">
					<!--用户名称-->
					<p class="userName">{{userInfo.name}}</p>
					<!--人气-->
					<p class="userContact"><span>关注 {{userInfo.concern}}</span> | <span>粉丝{{userInfo.fans}}</span></p>
					<!--标签-->
					<p class="userTags">
						<span :class="userInfo.sex=='女'?'girl':'boy'">{{userInfo.sex}} 95后</span>
						<span>lv{{userInfo.level}}</span>
						<span>{{userInfo.region}}</span>
						<span>双鱼座</span>
					</p>
				</div>
				<!--歌单列表表头-->
				<div class="userParts">
					<el-row :gutter="24">
						<router-link to="/user/userSongs">
							<el-col :span="8" class="userPartsTitle">
								<span>音乐（13）</span>
							</el-col>
						</router-link>
						<router-link to="/user/dynamic">
							<el-col :span="8" class="userPartsTitle">
								<span>动态（1）</span>
							</el-col>
						</router-link>
						<router-link to="/user/about">
							<el-col :span="8" class="userPartsTitle">
								<span>关于我（22）</span>
							</el-col>
						</router-link>
						
					</el-row>
				</div>
			</div>
			<!--用户列表数据-->
			<div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	let cookie = require("../../../static/js/cookie.js");

	export default{
		data(){
			return {
				topBgImg:"",
				userInfo:{},
				userSex:"girl"
			}
		},
		mounted(){
			let userId=cookie.cookie.getCookie("userId");
			this.$axios.get("/static/json/user.json")
			.then((responent)=>{
				this.userInfo=responent.data.user[userId];
				$(".userContentTop").css({
					backgroundImage:"url('"+this.userInfo.bGPic+"') ",
					backgroundSize:"100% 100%",
					backgroundRepeat:"no-repeat"
				});
			})
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.usermodule{
		
		margin: 0;
		font-size: 1rem;
		
	}
	.top{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
		/*background: rgba(250,250,250,0.5);*/
		height: 50px;
		width: 100%;
		line-height: 50px;
	}
	.userContentTop{
		height: 50vh;
		padding-top: 50px;
		position: relative;
		
	}
	.userHead{
		height: 17vh;
		line-height: 17vh;
		
	}
	.userHeadP{
		display: inline-block;
		height: 10vh;
		width: 10vh;
		line-height: 10vh;
	}
	.userHeadP img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		vertical-align: middle;
	}
	.editButton{
		display: inline-block;
		width: 80px;
		height: 36px;
		text-align: center;
		line-height: 36px;
		border-radius: 8px;
		background-color: rgba(250,250,250,0.7);
		color: #fff;
	}
	.editButton>i{
		color: #fff;
	}
	.userInfo{
		/*border: 1px solid red;*/
		padding: 0 12px;
	}
	.userInfo p,.userInfo span{
		color: #e1e1e1;
		font-size: 0.8rem;
	}
	.userName{
		height: 50px;
		line-height: 50px;
		color: #fff;
		font-size: 20px!important;
	}
	.userContact,.userTags{
		height: 36px;
		line-height: 36px;
	}
	.userTags>span{
		padding: 2px 10px;
		border-radius: 10px;
		margin-right: 6px;
		color: #fff;
		background-color: rgba(250,250,250,0.5);
	}
	.userTags>span.girl{
		background-color: rgba(241,147,147,0.5);
	}
	.userTags>span.boy{
		background-color: rgba(120,160,250,0.5);
	}	
	/*歌单列表表头*/
	.userParts{
		height: 60px;
		line-height: 60px;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #fff;
		border-radius: 40px 40px 0 0 ;
	}
	.userPartsTitle>span{
		font-size: 0.8rem;
		text-align: center;
	}
</style>