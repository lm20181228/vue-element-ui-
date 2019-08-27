<template>
	<div>
		<!--个人信息-->
		<div>
			<h2>个人信息</h2>
			<div>
				<p><span>等级：</span>{{userInfo.level}}</p>
				<p><span>年龄：</span>{{userInfo.birthday}}</p>
				<p><span>性别：</span>{{userInfo.sex}}</p>
				<p><span>地区：</span>{{userInfo.region}}</p>
			</div>
			
		</div>
		
		<!--个人介绍-->
		<div>
			<h2>个人介绍</h2>
			<div>
				<p>{{userInfo.sign}}</p>
			</div>
		</div>
		<!--我的评论-->
		<div>
			<h2>我的评论</h2>
			<!--<div>
				<p>{{userInfo.sign}}</p>
			</div>-->
		</div>
	</div>
</template>

<script>
	var cookie=require("../../../static/js/cookie.js")
	export default{
		data(){
			return{
				userInfo:{}
			}
		},
		mounted(){
			let userId=cookie.cookie.getCookie("userId");
			this.$axios.get("/static/json/user.json")
			.then((res)=>{
				console.log(res.data.user[userId])
				this.userInfo=res.data.user[userId];
			})
		}
	}
</script>

<style>
</style>