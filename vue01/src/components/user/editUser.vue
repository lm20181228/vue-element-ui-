<template>
	<!--编辑用户信息-->
	<div class="editUser">
		<el-row :gutter="24" class="title">
			<el-col :span="3" class="text-center">
				<router-link to="/myMusic">
					
					<i class="el-icon-back" ></i>
				</router-link>
			</el-col>
			<el-col :span="21">
				我的资料
			</el-col>
		</el-row>
		<!--修改内容部分-->
		<div class="editContent">
			<el-row class="coverImg border-bottom">
				<el-col :span="6">
					头像
				</el-col>
				<el-col :span="18" class="editImg text-right">
					<span>
						<img :src="user.headPortrait" alt="" />
					</span>
					<input type="file"  class="updataImg" placeholder="请选择文件"/>
				</el-col>
			</el-row>
			<el-row class="coverImg border-bottom">
				<el-col :span="6">
					个人主页背景
				</el-col>
				<el-col :span="18" class="editImg text-right">
					<span>
						<img :src="user.bGPic" alt="" />
					</span>
					<input type="file"  class="updataImg" placeholder="请选择文件"/>
				</el-col>
			</el-row>
			<el-row class="editContentHeight border-bottom" @click.native.stop="editBgcolorName = true">
				<el-col :span="6">
					昵称
				</el-col>
				<el-col :span="18" class="editName text-right" >
					<span>{{user.name}}</span>
				</el-col>
			</el-row>
			<el-row class="editContentHeight border-bottom">
				<el-col :span="6">
					性别
				</el-col>
				<el-col :span="18" class="sheetTag text-right">
					<span>{{user.sex}}</span>
					<!--<div v-if="sheetInfo.tag">
					  <span v-for="item in sheetInfo.tag" class="tagTitle">
					  		{{item.title}}
					  </span>
					</div>
					<span v-else class="placeholderColor">请输入歌单标签</span>-->
				</el-col>
			</el-row>
			<el-row class="editContentHeight border-bottom" @click.native.stop="editBgcolorName = true">
				<el-col :span="6">
					生日
				</el-col>
				<el-col :span="18" class="editName text-right" >
					<span>{{user.birthday}}</span>
				</el-col>
			</el-row>
			<el-row class="editContentHeight border-bottom" @click.native.stop="editBgcolorName = true">
				<el-col :span="6">
					地区
				</el-col>
				<el-col :span="18" class="editName text-right" >
					<span>{{user.region}}</span>
				</el-col>
			</el-row>
			<el-row class="editContentHeight border-bottom" @click.native.stop="editBgcolorName = true">
				<el-col :span="6">
					大学
				</el-col>
				<el-col :span="18" class="editName text-right" >
					<span>{{user.university}}</span>
				</el-col>
			</el-row>
			<el-row class="editContentHeight">
				<el-col :span="6">
					签名
				</el-col>
				<el-col :span="18" class="editDesc text-right" @click.native.stop="editBgcolorDesc=true">
					<span>{{user.sign}}</span>
				</el-col>
			</el-row>
		</div>
	</div>
</template>


<script>
	let cookie = require("../../../static/js/cookie.js");
	
	export default{
		data(){
			return {
				isEdit:false,
				editBgcolorName:false,
				editBgcolorDesc:false,
				user:{}
			}
		},
		methods:{
			/*show(sheetIndex){
				this.isEdit=true;
				this.$axios.get("/static/json/user.json")
				.then((response)=>{
					this.sheetInfo=response.data.user[sheetIndex.index];
				})
			},*/
			hide(){
				this.isEdit=false;
			},
			editName(){
				console.log("asfasfasf");
				/*this.editBgcolorName=true;*/
			},
			cancelName(){
				this.editBgcolorName=false
			},
			submitName(){
				this.editBgcolorName=false
			},
			cancelDesc(){
				this.editBgcolorDesc=false
				
			},
			submitDesc(){
				this.editBgcolorDesc=false
			}
		},mounted(){
			let userId=cookie.cookie.getCookie("userId");
	 		this.$axios.get("/static/json/user.json")
	 		.then((response)=>{
	 			this.user=response.data.user[userId];
	 		})
		}
	}
</script>

<style >
	.editUser{
		position: fixed;
	    top: 0;
	    margin: 0!important;
	    left: 0;
	    width: 100vw;
	    overflow: auto;
	    height: 100%;
	}
</style>