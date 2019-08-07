<template>
	<div>
		<!--社交推荐部分 S-->
	  	<div class="socialDiv">
	  		<ul class="social" id="social">
		  		<li v-for="item in socialInfo">
		  			<span class="socialIcon">{{item.icon}}</span>
		  			<span class="socialName">{{item.name}}</span>
		  		</li>
		  	</ul>
	  	</div>
		<!--社交推荐部分 E-->
	  	<!--本地音乐S-->
  		<el-card class="box-card" id="localInfo">
		  	<div v-for="item in localInfo" class="text localItem">
		  		<router-link to="/localMusic">
		  			<el-row :gutter="24">
		  				<el-col :span="4">
		  					<span class="localInfoIcon">
		  						sdf
		  						<!--<img :src="item.icon" alt="" />-->
		  					</span>
		  				</el-col>
		  				<el-col :span="20">
		  					<span class="localName">{{item.name}}</span>
		  				</el-col>
		  			</el-row>
		  		</router-link>	
		  	</div>
		</el-card>
	  	<!--本地音乐E-->
	  	<!--歌单部分S-->
	  	<div class="songSheet">
	  		<el-collapse >
	  			<!--v-model="activeNames" @change="handleChange"-->
	  			<el-collapse-item   name = "1">
	  				<div class="collapse-title songSheetTitle" slot="title">我的歌单({{songsLists.length}})
	  					<div class="operation">
	  						<span class="addMyList" @click="dialogFormVisible = true">+</span>
	  						<span class="moreOperations"  @click="drawer = true">:</span>
	  					</div>
	  				</div>
	  				
	  				<div class="text" v-for="item in songsLists.list">
				  		<router-link to="/localMusic">
				  			<el-row :gutter="24">
				  				<el-col :span="4">
				  					<span class="songSheetImg"><img :src="item.img" alt="" /></span>
				  				</el-col>
				  				<el-col :span="16">
				  					<span class="">{{item.name}}</span>
				  					<p>{{item.mun}}</p>
				  				</el-col>
				  				<el-col :span="4">
				  					<span class="">+</span>
				  				</el-col>
				  			</el-row>
				  		</router-link>	
				  	</div>
	  			</el-collapse-item>
	  			<el-collapse-item name = "2">
	  				<span class="collapse-title" slot="title">收藏的歌单({{collectionSongsLists.length}})</span>
	  				<div class="text " v-for="item in collectionSongsLists.lists">
				  		<router-link to="/localMusic">
				  			<el-row :gutter="24">
				  				<el-col :span="4">
				  					<span class="songSheetImg"><img :src="item.img" alt="" /></span>
				  				</el-col>
				  				<el-col :span="16">
				  					<span class="">{{item.name}}</span>
				  					<p>{{item.mun}}</p>
				  				</el-col>
				  				<el-col :span="4">
				  					<span class="">+</span>
				  				</el-col>
				  			</el-row>
				  		</router-link>	
				  	</div>
	  			</el-collapse-item>
	  		</el-collapse>
	  	</div>
	  	<!--歌单部分E-->
	  	<!--新增我的歌单弹窗S-->
	  	
	  	<!--新增我的歌单弹窗E-->
		<el-drawer
		  title="创建的歌单"
		  :visible.sync="drawer"
		  :direction="direction"
		  >
		  <span>我来啦!</span>
		</el-drawer>
		<!--新建歌单信息S-->
		<el-dialog title="新建歌单" :visible.sync="dialogFormVisible">
			  <el-form :model="form">
			    <el-input v-model="form.name" autocomplete="off" ></el-input>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <span @click="cancel()">取 消</span>
			    <span type="primary"  @click="submit()">提  交</span>
			  </div>
		</el-dialog>
		<!--新建歌单信息E-->
	</div>
</template>

<script>
	 export default {
	 	
	    data() {
	      return {
	      	//社交推荐
	      	socialInfo:[{
	      		id:1,
	      		icon:"私",
	      		name:"私人FM"
	      	},{
	      		id:2,
	      		icon:"电",
	      		name:"最新电音"
	      	},{
	      		id:3,
	      		icon:"sati",
	      		name:"sati空间"
	      	},{
	      		id:4,
	      		icon:"推",
	      		name:"私藏推荐"
	      	},{
	      		id:5,
	      		icon:"乐1",
	      		name:"因乐交友1"
	      	},{
	      		id:6,
	      		icon:"乐2",
	      		name:"因乐交友2"
	      	},{
	      		id:7,
	      		icon:"乐3",
	      		name:"因乐交友3"
	      	},{
	      		id:8,
	      		icon:"乐4",
	      		name:"因乐交友4"
	      	}],
	      	//本地音乐
	        localInfo:[{
	        	id:1,
	        	name:"本地音乐",
	        	icon:"/static/img/wangyiyun.cb53c5d.png"
	        },{
	        	id:2,
	        	name:"最近播放",
	        	icon:"/static/img/wangyiyun.cb53c5d.png"
	        },{
	        	id:3,
	        	name:"下载管理",
	        	icon:"/static/img/wangyiyun.cb53c5d.png"
	        },{
	        	id:4,
	        	name:"我的电台",
	        	icon:"/static/img/wangyiyun.cb53c5d.png"
	        },{
	        	id:5,
	        	name:"我的收藏",
	        	icon:"/static/img/wangyiyun.cb53c5d.png"
	        }],
	        activeNames: ['1'],
	        //创建歌单
	        songsLists:{
	        	list:[{
		        	id:0,
		        	name:"歌单1",
		        	img:"/static/img/wangyiyun.cb53c5d.png",
		        	mun:12
		        },{
		        	id:1,
		        	name:"歌单2",
		        	img:"/static/img/wangyiyun.cb53c5d.png",
		        	mun:1
		        },{
		        	id:2,
		        	name:"歌单3",
		        	img:"/static/img/wangyiyun.cb53c5d.png",
		        	mun:30
		        },{
		        	id:3,
		        	name:"歌单4",
		        	img:"/static/img/wangyiyun.cb53c5d.png",
		        	mun:24
		        }],
	        	length:4
	        },
	        
	        /*收藏歌单*/
	       	collectionSongsLists:{
	       		lists:[{
		        	id:1,
		        	name:"收藏歌单1",
		        	img:"/static/img/wangyiyun.cb53c5d.png",
		        	mun:30
		        },{
		        	id:2,
		        	name:"收藏歌单2",
		        	img:"/static/img/wangyiyun.cb53c5d.png",
		        	mun:24
		        }],
		        length:2
	       	},
	       	drawer: false,
        	direction: 'btt',
        	dialogTableVisible: false,
        	dialogFormVisible: false,
        	form: {
	          name: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: ''
	        },
	        formLabelWidth: '120px'
	      };
	    },
	    methods: {
	      handleChange(val) {
	        console.log(val);
	      },
	      addList(event){
	      	event.preventDefault();
	      	console.log("asd")
	      },
	      cancel(){
	      	this.dialogFormVisible=false;
	      },submit(){
	      	console.log("提交");
	      	var newSongs={
	        	id:this.songsLists.length,
	        	name:this.form.name,
	        	img:"/static/img/wangyiyun.cb53c5d.png",
	        	mun:0
	       	};
	       	this.songsLists.list.unshift(newSongs);
	       	this.songsLists.length++;
	       	this.form.name="";
	      	this.dialogFormVisible=false;
	      }
	    }
	  }
</script>

<style>
	.socialDiv{
		/*width: 100%;*/
	    overflow: auto;
	    padding: 10px;
	    background-color: #fff;
	}
	.social{
		
		list-style: none;
		height: 60px;
		
		white-space: nowrap;
	}
	.social li{
		display: inline-block;
		width: 60px;
		text-align: center;
	}
	.social li>.socialIcon{
		display: block;
		height: 40px;
		width: 40px;
		margin: 0 5px;
		
		line-height: 40px;
		border-radius: 50%;
		
		/*border: 1px solid red;*/
		background-color: #9c0b0b;
		color: #fff;
	}
	.social li>.socialName{
		font-size: 12px;
	}
	/*本地音乐信息*/
	#localInfo{
		boder-color:#dcdcdc;
		border-width: 1px 0 ;
	}
	.el-card__body{
		padding: 0 20px!important;
	}
	#localInfo a{
		text-decoration: none;
		color: #000;
	}
	.localItem{
		height: 40px;
		line-height: 40px;
	}
	.localInfoIcon{
		
	}
	.localInfoIcon>img{
		width: 100%;
		height: 100%;
	}
	.localName{
		border-bottom: 1px solid #dcdcdc;
		display: inline-block;
		width: 100%;
	}
	/*歌单部分*/
	.songSheet{
		margin-top: 10px;
		padding: 0 20px;
		background-color: #fff;
	}
	.el-collapse-item__content{
		padding: 0;
	}
	.songSheetImg{
		width: 100%;
	}
	.songSheetImg>img{
		width: 100%;
	}
	 .collapse-title {
        flex: 1 0 90%;
        order: 1;
    }
    .el-collapse-item__header {
        flex: 1 0 auto;
        order: -1;
    }
    .songSheetTitle{
    	position: relative;
    }
    .operation{
    	border: 1px solid red;
    	position: absolute;
    	top: 0;
    	right: 0;
    	width: 40px;
    }
    .operation>span{
    	display: inline-block;
    	width: 18px;
    	text-align: center;
    }
</style>
