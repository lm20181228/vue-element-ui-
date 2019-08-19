<template>
	<div class="editSheet" v-if="isEdit">
		<!--头部栏-->
		<el-row :gutter="24">
			<el-col :span="3">
				<i class="el-icon-back"></i>
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
				<el-col :span="18">
					
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6">
					名称
				</el-col>
				<el-col :span="18">
					
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6">
					标签
				</el-col>
				<el-col :span="18">
					
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="6">
					描述
				</el-col>
				<el-col :span="18">
					
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isEdit:true
			}
		}
	}
</script>

<style>
</style>