<template>
	<div class="marginTB60">
		<!--社交推荐部分 S-->
	  	<div class="socialDiv">
	  		<ul class="social" id="social">
		  		<li v-for="(item,i) in socialInfo" :key="i">
		  			<span class="socialIcon">{{item.icon}}</span>
		  			<span class="socialName">{{item.name}}</span>
		  		</li>
		  		<li>
		  			<span class="socialIcon"><i class="el-icon-plus"></i></span>
		  			<span class="socialName">添加</span>
		  		</li>
		  	</ul>
	  	</div>
		<!--社交推荐部分 E-->
	  	<!--本地音乐S-->
  		<el-card class="box-card" id="localInfo">
		  	<div v-for="(item,i) in localInfo" :key="i" class="text localItem">
		  		<router-link :to="{path:item.path}">
		  			<el-row :gutter="24">
		  				<el-col :span="4" class="text-center">
		  					<span class="localInfoIcon ">
		  						<i :class="item.icon"></i>
		  						<!--<img :src="item.icon" alt="" />-->
		  					</span>
		  				</el-col>
		  				<el-col :span="20">
		  					<span class="localName">{{item.name}}({{item.num}})</span>
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
	  				<div class="collapse-title songSheetPosition" slot="title">创建的歌单({{songsLists&&songsLists.length}})
	  					<div class="operation">
	  						<span class="addMyList" @click.stop="dialogFormVisible = true">+</span>
	  						<span class="moreOperations"  @click.stop="drawer = true,clickList=0">:</span>
	  					</div>
	  				</div>
	  				
	  				<div class="text songSheetPosition" v-for="(item,i) in songsLists.list" :key="i"  @click="clickList=0,selectSheet(item, i,$event)">
				  		<div>
				  			<el-row :gutter="24">
				  				<el-col :span="4">
				  					<span class="songSheetImg "><img :src="item.img" alt="" /></span>
				  				</el-col>
				  				<el-col :span="20">
				  					<span class="">{{item.name}}</span>
				  					<p>{{item.mun}}</p>
				  				</el-col>
				  				
				  			</el-row>
				  		</div>	
				  		<el-col :span="4" class="operation">
		  					<span class="" @click.stop="songDrawer=true ,clickList=0, songIndex=i" >：</span>
		  				</el-col>
				  	</div>
	  			</el-collapse-item>
	  			<el-collapse-item name = "2">
	  				<div class="collapse-title songSheetPosition" slot="title">收藏的歌单({{collectionSongsLists&&collectionSongsLists.length}})
	  					<div class="operation">
	  						<span class="moreOperations"  @click.stop="drawer = true,clickList=1">:</span>
	  					</div>
	  				</div>
	  				<div class="text songSheetPosition" v-for="(item,i) in collectionSongsLists.list"  :key="i" @click="clickList=1,selectSheet(item, i,$event)">
				  		<div>
				  			<el-row :gutter="24">
				  				<el-col :span="4">
				  					<span class="songSheetImg"><img :src="item.img" alt="" /></span>
				  				</el-col>
				  				<el-col :span="20">
				  					<span class="">{{item.name}}</span>
				  					<p>{{item.mun}}</p>
				  				</el-col>
				  			</el-row>
				  		</div>	
				  		<el-col :span="4"  class="operation">
		  					<span @click.stop="songDrawer=true ,clickList=1, songIndex=i">:</span>
		  				</el-col>
				  	</div>
	  			</el-collapse-item>
	  		</el-collapse>
	  	</div>
	  	<!--歌单部分E-->
	  	<!--新增我的歌单弹窗S-->
		<el-drawer :title="clickList==0?'创建的歌单':'收藏歌单'" :visible.sync="drawer" :direction="direction" :show-close="showClose">
		  	<el-row :gutter="24" v-if="clickList==0">
		  		<el-col :span="4"  class="text-center"><i class="el-icon-circle-plus-outline"></i></el-col>
		  		<el-col :span="20" class="el_borderB" @click.native="dialogFormVisible = true">新增歌单</el-col>
		  	</el-row>
		  	<el-row :gutter="24">
		  		<el-col :span="4"  class="text-center"><i class="el-icon-tickets"></i></el-col>
		  		<el-col :span="20" class="el_borderB" @click.native="manageSheet()">歌单管理</el-col>
		  	</el-row>
		</el-drawer>
	  	<!--新增我的歌单弹窗E-->
	  	<!--编辑歌单信息S-->
		<el-drawer v-if="songDrawer" :title="clickList==0?'歌单：'+ songsLists.list[songIndex].name:'歌单：'+ collectionSongsLists.list[songIndex].name" :visible.sync="songDrawer" :direction="direction" :show-close="showClose">
			<div>
				<el-row :gutter="24" v-for="(item,index) in editSongsList" :key="index" @click.native.stop="delSong(item.clickEvent,songIndex)">
					<el-col :span="4"  class="text-center" v-show="!(index==2&&clickList==1)">
						<i :class="item.icon"></i>
					</el-col>
					<el-col :span="20" class="el_borderB" v-show="!(index==2&&clickList==1)">
						{{item.name}}
					</el-col>
				</el-row>
			</div>
		</el-drawer>
	  	<!--编辑歌单信息E-->
		
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
	    <!-- ref 用来调用 子组件的方法 show  -->
	    <songSheet  :songSheet="selectedSongSheet" ref="songSheets" class="songSheets"></songSheet>
	    <!--编辑页面-->
	    <edit ref="edit"> </edit>
	    <!--歌单管理页面-->
	    <manage ref="manage" ></manage>
	</div>
</template>

<script>
	import songSheet from '../songSheet/songSheet';
	import edit from "../songSheet/editSongSheet";
	import manage from "../songSheet/manageSheet";
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
	        	Path:"",
	        	num:30,
	        	icon:"el-icon-headset"
	        },{
	        	id:2,
	        	name:"最近播放",
	        	path:"recent",
	        	num:185,
	        	icon:"el-icon-headset"
	        },{
	        	id:3,
	        	name:"下载管理",
	        	path:"",
	        	num:0,
	        	icon:"el-icon-download"
	        },{
	        	id:4,
	        	name:"我的电台",
	        	path:"",
	        	num:0,
	        	icon:"el-icon-microphone"
	        },{
	        	id:5,
	        	name:"我的收藏",
	        	path:"",
	        	num:2,
	        	icon:"el-icon-star-off"
	        }],
	        activeNames: ['1'],
	        songIndex:0,//记录当前操作歌单的下表
	        clickList:0,//当前点击操作的歌单是我的歌单（0）还是收藏歌单（1）
	        selectedSongSheet: {},//选中的歌单，
	        //创建歌单
	        songsLists:{},
	        
	        /*收藏歌单*/
	       	collectionSongsLists:{},
	       	drawer: false,//是否显示 Drawer，支持 .sync 修饰符
        	direction: 'btt',//弹框出现方向
        	showClose:false,//弹框关闭按钮是否存在
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
	        formLabelWidth: '120px',
	        songDrawer:false,
	        //编辑歌单操作
	        editSongsList:[
	        	{
	        		icon:"el-icon-download",
	        		name:"下载（暂无此功能）",
	        		clickEvent:"download"
	        	},{
	        		icon:"el-icon-share",
	        		name:"分享（暂无此功能）",
	        		clickEvent:"share"
	        	},{
	        		icon:"el-icon-edit",
	        		name:"编辑",
	        		clickEvent:"edit"
	        	},{
	        		icon:"el-icon-delete",
	        		name:"删除",
	        		clickEvent:"del"
	        	},
	        ],
	        clickEvent:{
	        	download:(index)=>{
	        		console.log("download="+index);
	        	},
	        	share:(index)=>{
	        		console.log("share="+index);
	        	},
	        	edit:(index)=>{
	        		let editInfo={};
	        		editInfo.index=index;
					editInfo.type=this.clickList;
					this.$refs.edit.show(editInfo);
					this.songDrawer = false;
	        	},
	        	del:(index)=>{
		      		let songList="";
			      	this.clickList==0?songList=this.songsLists:songList=this.collectionSongsLists;
			      	
			      	songList.list.splice(index,1);
			      	songList.length--;
			      	this.songDrawer = false;
		      	}
	        }
	      };
	    },
	    mounted(){
	    	let that=this;
	    	this.$axios.get('./static/json/songSheet.json')
				.then(function (response) {
				that.collectionSongsLists=response.data.data.collectionSongsLists;
				that.songsLists=response.data.data.songsLists;
		  	})
		  	.catch(function (error) {
			    console.log(error);
		  	});
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
	      	this.form.name="";//清空表单填写数据
	      	this.dialogFormVisible=false;
	      },submit(){
	      	if(!this.form.name){
	      		this.$message('歌单名不能为空');
	      		this.dialogFormVisible=false;
	      		return false;
	      	}
	      	var newSongs={
	        	id:this.songsLists.length,
	        	name:this.form.name,
	        	img:"./static/img/my/wangyiyun.png",
	        	mun:0
	       	};
	       	this.songsLists.list.unshift(newSongs);//把新建歌单放置在歌单列表前
	       	this.songsLists.length++;//修改歌单个数
	       	this.form.name="";//清空表单填写数据
	      	this.dialogFormVisible=false;
	      },
	      manageSheet(){
	      	let manage=this.clickList==0?"songsLists":"collectionSongsLists";
	      	this.$refs.manage.show("./static/json/songSheet.json",manage);
	      	this.drawer=false;
	      },
	      delSong(Event,index){
	      	/*处理执行函数*/
	      	this.clickEvent[Event](index);
	      },selectSheet(sheet,index, event) { // 设置选中的商品以便传递给 sheet组件
	       		/*console.log(event._constructed)
		        if (!event._constructed) {
		          return;
		        }*/
		        this.selectedSongSheet = sheet;
		        //this.$refs.ref.method
		        this.$refs.songSheets.show(); // 调用 子组件 sheet 的show方法
		        this.$refs.songSheets.getSongs(index,this.clickList); // 调用 子组件 sheet 的getSongs方法
      		},
	    },
	    components:{
	    	songSheet: songSheet, // 注册组件
	    	edit:edit,//编辑
	    	manage:manage,//歌单管理
	    }
	  }
</script>

<style>
	.text-center{
		text-align: center;
	}

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
		
		background-color: #db0f0f;
		color: #fff;
	}
	.social li>.socialName{
		font-size: 12px;
	}
	/*本地音乐信息*/
	#localInfo{
		border-color:#dcdcdc;
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
		display: inline-block;
    	line-height: 50px;
    	height: 50px;
    	overflow: hidden;
	}
	.songSheetImg>img{
		width: 100%;
		vertical-align: middle;
		/*max-height: 50px;*/
	}
	 .collapse-title {
        flex: 1 0 90%;
        order: 1;
    }
    .el-collapse-item__header {
        flex: 1 0 auto;
        order: -1;
    }
    .songSheetPosition{
    	position: relative;
    }
    .operation{
    	position: absolute;
    	top: 0;
    	right: 0;
    	width: 42px;
    }
    .operation>span{
    	display: inline-block;
    	width: 18px;
    	text-align: center;
    }
    /*控制下弹框的样式*/
   .el-drawer{
   		height: auto!important;
   		padding-bottom: 10px!important;
   		border-radius: 10px 10px 0 0;
   }
   .el-drawer__header{
   	    height: 50px;
	    margin: 0;
	    padding: 0;
	    line-height: 50px;
   }
   .el-drawer__header,.el_borderB{
   		border-bottom: 1px solid #dcdcdc;
   }
   .el-drawer__header{
	   	padding: 0 12px;
   }
   .el-drawer__body{
	 /*   height: 40px;*/
	    line-height: 40px;
   }
</style>
