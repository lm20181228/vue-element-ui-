<template>
	<div class="partFixed editSheet" v-if="isEdit">
		<!--头部栏-->
		<el-row :gutter="24" class="title">
			<el-col :span="3" class="text-center">
				<i class="el-icon-back" @click.stop="hide()"></i>
			</el-col>
			<el-col :span="21">
				编辑歌单信息
			</el-col>
		</el-row>
		<!--修改内容部分-->
		<div>
			<el-row>
				<el-col :span="6">
					更改封面
				</el-col>
				<el-col :span="18" class="sheetImg">
					<span>
						<img src="#" alt="" />
					</span>
					<input type="text" />
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6">
					名称
				</el-col>
				<el-col :span="18" class="sheetName">
					<span>asfasfsafasfawrqwrwqrwqrwqrwqrqwrwqrwqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</span>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6">
					标签
				</el-col>
				<el-col :span="18" class="sheetTag">
					<span>第一标签</span>
					<span>欧美</span>
					<span>爵士</span>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6">
					描述
				</el-col>
				<el-col :span="18" class="sheetDesc">
					<p>zvzxvvvvvvv在是在是未发生发搜嘎司法所 阿沙发沙发上噶啥是个 暗示法噶所噶奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥奥爱上噶啥事</p>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isEdit:false
			}
		},
		methods:{
			show(){
				this.isEdit=true;
			},
			hide(){
				this.isEdit=false;
			}
		}
	}
</script>

<style>
	.editSheet{
		padding: 0 10px;
	}
	.title{
		height: 60px;
		line-height: 60px;
	}
	.sheetName{
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
</style>