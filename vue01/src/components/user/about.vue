<template>
	<div class="about">
		<!--个人信息-->
		<div class="">
			<h2 class="aboutTitle">个人信息</h2>
			<div >
				<p class="colorGray"><span>等级：</span>{{userInfo.level}}</p>
				<p class="colorGray"><span>年龄：</span>{{userInfo.birthday}}</p>
				<p class="colorGray"><span>性别：</span>{{userInfo.sex}}</p>
				<p class="colorGray"><span>地区：</span>{{userInfo.region}}</p>
			</div>
			
		</div>
		
		<!--个人介绍-->
		<div class="">
			<h2 class="aboutTitle">个人介绍</h2>
			<div >
				<p class="colorGray">{{userInfo.sign}}</p>
			</div>
		</div>
		<!--我的评论-->
		<div>
			<h2 class="aboutTitle">我的评论<span class="colorGray fontSmall">（仅自己可见，可在隐私设置中修改）</span></h2>
			<div class="userComment" v-for="(item , i) in userComment">
				<div id="">
					<span class="commentImg"><img :src="item.target.img" alt="" /></span>
					<span class="colorGray">{{item.target.name}}-{{item.target.author}}</span>
				</div>
				<div class="desc">
					{{item.comment}}
				</div>
				<p><span class="colorGray fontSmall">{{item.createTime}}</span></p>
			</div>
		</div>
	</div>
</template>

<script>
	var cookie=require("../../../static/js/cookie.js")
	export default{
		data(){
			return{
				userInfo:{},
				userComment:{}
			}
		},
		mounted(){
			let userId=cookie.cookie.getCookie("userId");
			this.$axios.get("./static/json/user.json")
			.then((res)=>{
				
				this.userInfo=res.data.user[userId];
			})
			this.$axios.get("./static/json/userComment.json")
			.then((res)=>{
				this.userComment=res.data.data;
			})
			
		}
	}
</script>

<style>
	.colorGray,.colorGray *{
		color: #a5a5a5;
	}
	.fontSmall{
		font-size: 12px;
	}
	.about{
		width: 90%;
		margin: auto;
	}
	.about>div{
		margin-bottom: 20px;
	}
	.aboutTitle{
		height: 46px;
		line-height: 46px;
	}
	.desc{
		margin: 10px 0;
	}
	.userComment{
		padding: 20px 0;
		border-bottom: 1px solid #e4e4e4;
	}
	.commentImg{
		display: inline-block;
		width: 40px;
		height: 40px;
		vertical-align: middle;
	}
	.commentImg>img{
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
</style>