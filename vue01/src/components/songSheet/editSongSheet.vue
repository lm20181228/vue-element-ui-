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
		<div class="editContent">
			<el-row class="coverImg border-bottom">
				<el-col :span="6">
					更改封面
				</el-col>
				<el-col :span="18" class="sheetImg text-right">
					<span>
						<img :src="sheetInfo.img" alt="" />
					</span>
					<input type="file"  class="updataImg" placeholder="请选择文件"/>
				</el-col>
			</el-row>
			<el-row class="editContentHeight border-bottom" @click.native.stop="editSheetName = true">
				<el-col :span="6">
					名称
				</el-col>
				<el-col :span="18" class="sheetName text-right" >
					<span>{{sheetInfo.name}}</span>
				</el-col>
			</el-row>
			<el-row class="editContentHeight border-bottom">
				<el-col :span="6">
					标签
				</el-col>
				<el-col :span="18" class="sheetTag text-right">
					<div v-if="sheetInfo.tag">
					  <span v-for="item in sheetInfo.tag" class="tagTitle">
					  		{{item.title}}
					  </span>
					</div>
					<span v-else class="placeholderColor">请输入歌单标签</span>
				</el-col>
			</el-row>
			<el-row class="editContentHeight">
				<el-col :span="6">
					描述
				</el-col>
				<el-col :span="18" class="sheetDesc text-right" @click.native.stop="editSheetDesc=true">
					<p v-if="sheetInfo.desc" class="descInfo">
						{{sheetInfo.desc}}
					</p>
					<p v-else class="placeholderColor">暂无描述</p>
				</el-col>
			</el-row>
		</div>
		<!--修改歌单名称S-->
		<el-dialog title="修改歌单名称" :visible.sync="editSheetName"  :modal-append-to-body=false>
			  <el-form >
			    <el-input v-model="sheetInfo.name" autocomplete="off" ></el-input>
			  </el-form>
			  
			  <div slot="footer" class="dialog-footer">
			    <span @click="cancelName()">取 消</span>
			    <span type="primary"  @click="submitName()">提  交</span>
			  </div>
		</el-dialog>
		<!--修改歌单名称E-->
		<!--修改歌单描述S-->
		<el-dialog title="修改歌单描述" :visible.sync="editSheetDesc"  :modal-append-to-body=false>
			  <el-form >
			    <el-input type="textarea" v-model="sheetInfo.desc"></el-input>
			  </el-form>
			  
			  <div slot="footer" class="dialog-footer">
			    <span @click="cancelDesc()">取 消</span>
			    <span type="primary"  @click="submitDesc()">提  交</span>
			  </div>
		</el-dialog>
		<!--修改歌单描述E-->
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isEdit:false,
				editSheetName:false,
				editSheetDesc:false,
				sheetInfo:{}
			}
		},
		methods:{
			show(sheetIndex){
				this.isEdit=true;
				this.$axios.get("/static/json/songSheet.json")
				.then((response)=>{
					this.sheetInfo=response.data.data.songsLists.list[sheetIndex.index];
				})
			},
			hide(){
				this.isEdit=false;
			},
			editName(){
				console.log("asfasfasf");
				/*this.editSheetName=true;*/
			},
			cancelName(){
				this.editSheetName=false
			},
			submitName(){
				this.editSheetName=false
			},
			cancelDesc(){
				this.editSheetDesc=false
				
			},
			submitDesc(){
				this.editSheetDesc=false
			}
		}
	}
</script>

<style>
	.placeholderColor{
		font-size: 16px;
		color: #949494;
	}
	.editSheet{
		background: #ececec;
	}
	.border-bottom{
		border-bottom: 1px solid #ececec;
	}
	.title{
		height: 60px;
		line-height: 60px;
		background: #fff;
	}
	.coverImg{
		position: relative;
		height: 80px;
		line-height: 80px;
	}
	.editContent{
		padding: 10px;
		margin-top: 10px;
		background: #fff;
		height: calc(100vh - 90px);
	}
	.sheetName{
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.editContentHeight{
		min-height: 50px;
		line-height: 50px;
	}
	.updataImg{
	    width: 100%;
	    height: 100%;
	    position: absolute;
	    top: 0;
	    left: 0;
	    opacity: 0;
	}
	.sheetImg img{
		width: 80px;
		max-height: 70px;
		vertical-align: middle;
	}
	.descInfo {
		line-height: 24px;
	}
	.sheetDesc>p{
		font-size: 14px;
		/*line-height: 24px;*/
	}
	.tagTitle{
		font-size: 14px;
	    display: inline-block;
	    border: 1px solid #d6d4d4;
	    height: 26px;
	    line-height: 26px;
	    padding: 0 4px;
	    border-radius: 10px;
	    margin:0 4px ;
	}
</style>