<template>
	<div>
		<!--分享详情-->
		<div class="dynamic" v-for="(item , i) in shareComment.share">
			<div class="dynamicLeft">
				<img :src="item.creatAuthor.headPortrait" alt="" />
			</div>
			<div class="dynamicRight">
				<p class="shareTitle"><span class="colorTag">{{item.creatAuthor.name}}</span><span>{{item.type}}分享单曲:</span></p>
				<p><span class="creatTime">{{item.creatTime}}</span></p>
				<div>
					<p class="shareDesc"><span class="colorTag" v-for="tag in item.topPic">#{{tag}}#</span>{{item.desc}}</p>
					<div >
						<audio src=""></audio>
					</div>
				</div>
				<el-row :gutter="24" class="operate">
					<el-col :span="6"><span>转发 {{item.operation.forward.length}}</span></el-col>
					<el-col :span="6"><span>留言  {{item.operation.comment.length}}</span></el-col>
					<el-col :span="6"><span>点赞  {{item.operation.likes.length}}</span></el-col>
					<el-col :span="6" class="text-right"><span>:</span></el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				shareComment:{}
			}
		},
		methods:{
			
		},
		mounted(){
			this.$axios.get("./static/json/userGynamic.json")
			.then((res)=>{
				/*console.log(res.data);*/
				this.shareComment=res.data;
			})
		}
	}
</script>

<style scoped="scoped">
	*{
	    box-sizing: border-box;
	}
	.dynamic{
		width: 90%;
		margin: 0 auto;
	}
	.dynamicLeft{
		display: inline-block;
		width: 20%;
		vertical-align: top;
	}
	.dynamicLeft>img{
		width: 80%;
		text-align: center;
		border-radius: 50%;
	}
	.dynamicRight{
		display: inline-block;
		width: 78%;
	}
	.operate>div{
		padding: 0!important;
		margin: 10px 0;
	}
	.colorTag{
		color: #6485A7;
	}
	.shareTitle{
		color: #666;
	}
	.creatTime{
		font-size: 12px;
		color: #999
	}
	.shareDesc{
		color: #111;
	}
</style>