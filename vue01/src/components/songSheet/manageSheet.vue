<template >
	<div v-if="manage" class="manageSheet">
		<el-header class="manageHeader">
			<el-row :gutter="24">
				<el-col :span="4" class="text-left">
					<span class="el-icon-back" @click="back()"></span>
				</el-col>
				<el-col :span="14">
					<span>已选择<span>{{selectedNum}}</span>项</span>
				</el-col>
				<el-col :span="6" class="text-right">
					<span @click="selectAll()" >全选</span>
				</el-col>
			</el-row>
		</el-header>
		<el-main class="sheetList">
			<div v-for="(item,i ) in songSheet.list">
				<el-row class="" :gutter="24">
					<el-col :span='20' class="sheetName">
						<!--<el-checkbox  name="type"  :attrId="item.id">
							
						</el-checkbox>-->
						<label>
							<input type="checkbox" name="type" value="" @input="select()" :attrId="item.id"/>
							<span  class="Namw">{{item.name }}</span>
							
						</label>
					</el-col>
					<el-col :span="4" class="text-right">
						<span class="el-icon-s-grid"></span>
					</el-col>
				</el-row>
			</div>			
		</el-main>
		<el-footer class="text-center manageFooter">
			<p @click="deleteSelected()"><span class="el-icon-delete" ></span> 删除</p>
		</el-footer>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default{
		data(){
			return{
				manage:false,
				songSheet:"",
				selectedNum:0,
				status:false
			}
		},
		methods:{
			show(sheetIndex){
				this.manage=true;
				this.$axios.get("./static/json/songSheet.json")
				.then((response)=>{
					this.songSheet=response.data.data[sheetIndex];
				});
				this.select();
			},
			selectAll(){
				console.log(this.status)
				if(this.status){
					$("[name=type]").prop("checked",false);
					this.status=false;
				}else{
					$("[name=type]").prop("checked",true);
					this.status=true;
				}
				
				this.selectedNum=$("[name='type']:checked").length;
			},
			select(){
				
				this.selectedNum=$("[name='type']:checked").length;
				if(this.selectedNum==$("[name='type']").length){
					console.log("sfasf");
					this.status=true;
				}else if(this.selectedNum==0){
					console.log("sfasf");
					this.status=false;
				}
				/*console.log($("[name='type']:checked").attr("attrid"));*/
			},
			deleteSelected(){
				var self=this;
				let selectedArr=[];
				$("[name='type']:checked").each(function(){
					selectedArr.push($(this).attr("attrid"));
					/*删除选中*/
				});
				var len=selectedArr.length;
				while(len>0){
					let selectElm=selectedArr.shift();
					for(var i in self.songSheet.list){
						let item=self.songSheet.list[i];
						if(item.id==selectElm){
							self.songSheet.list.splice(i,1);
						}
					}
					len--;
				}
				$("[name='type']").prop("checked",false);
				this.selectedNum=0;
			},
			back(){
				this.manage=false;
			}
		},
		mountd(){
			
		}
	}
</script>

<style scoped="">
	.manageSheet{
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;
		background: #fff;
	}
	.manageHeader,.manageFooter{
		position: fixed;
		height: 60px;
		line-height: 60px;
		width: 100vw;
	}
	.sheetList{
		padding: 0;
		/*border: 1px solid red;*/
		height: calc(100vh - 120px);
		margin-top: 60px;
	}
	.sheetList>div{
		height: 50px;
		line-height: 50px;
	}
	.manageHeader{
		top: 0;
		/*border: 1px solid red;*/
	}
	.manageFooter{
		
		bottom: 0;
		
		border-top: 1px solid #cecaca;
	}
	.sheetName{
		overflow: hidden;
		text-overflow: ellipsis;
		
	}
</style>