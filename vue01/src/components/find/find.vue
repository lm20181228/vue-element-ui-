<template>
	<div class="findMoudel marginTB60">
	  	<el-carousel :interval="4000" type="card" trigger="click" height="100px" class="bgWhite">
		    <el-carousel-item v-for="(item,i) in banners"  class="carouselBanner" :key="i">
		      <!--<h3 class="medium">{{ item }}</h3>-->
		      <img :src="item.imgUrl" :alt="item.title" />
		    </el-carousel-item>
		</el-carousel>
		<el-row :gutter="24" class="text-center findBtns bgWhite">
			<el-col :span="45">
				<span class="findIcon"><i class="el-icon-date"></i></span>
				<span class="findBtn">每日推荐</span>
			</el-col>
			<el-col :span="5">
				<span class="findIcon">
					<i class="el-icon-document"></i>
				</span>
				<span class="findBtn">歌单</span>				
			</el-col>
			<el-col :span="4">
				<span class="findIcon">
					<i class="el-icon-s-data"></i>
				</span>
				<span class="findBtn">排行榜</span>				
			</el-col>
			<el-col :span="5">
				<span class="findIcon">
					<i class="el-icon-headset"></i>
				</span>
				<span class="findBtn">电台</span>				
			</el-col>
			<el-col :span="5">
				<span class="findIcon">
					<i class="el-icon-video-camera"></i>
				</span>
				<span class="findBtn">直播</span>
			</el-col>
		</el-row>
		<div class="recommend bgWhite">
			<!--推荐歌单-->
			<h1 class="newTitle">推荐歌单</h1>
			<el-row :gutter="24" class="recommendSong">
				<el-col :span="8" v-for="(item,i) in recommendSong" class="recommendPart">
					<img :src="item.imgUrl" alt="" />
					<span class="recommendName">{{item.name}}</span>
				</el-col>
			</el-row>
			<!--新碟-->
			<h1 class="newTitle">新碟</h1>
			<el-row :gutter="24" class="recommendSong">
				<el-col :span="8" v-for="(item,i) in newDish" class="recommendPart">
					<img :src="item.imgUrl" alt="" />
					<span class="recommendName">{{item.name}}</span>
				</el-col>
			</el-row>
		</div>
		<div class="officialSelection ">
			<!--精选频道-->
			<h1 class="bgWhite">精选频道</h1>
			<!--带你感受“巅峰时刻”！-->
			<div v-for="item in officialSelection" class="selectionPart bgWhite">
				<p class="selectName">{{item.name}}</p>
				<router-link to="/">
					
					<img :src="item.imgUrl" alt="" class="selectImg"/>
					<p class="selectTitle">{{item.title}}</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				banners:[{
					id:0,
					imgUrl:"./static/img/find/findBg1.jpg",
					title:"第一张图"
				},{
					id:1,
					imgUrl:"./static/img/find/findBg2.jpg",
					title:"第二张图"
				},{
					id:2,
					imgUrl:"./static/img/find/findBg3.jpg",
					title:"第三张图"
				},{
					id:3,
					imgUrl:"./static/img/find/findBg4.jpg",
					title:"第四张图"
				},{
					id:4,
					imgUrl:"./static/img/find/findBg5.jpg",
					title:"第五张图"
				},{
					id:5,
					imgUrl:"./static/img/find/findBg6.jpg",
					title:"第六张图"
				}],
				recommendSong:[{
					id:0,
					imgUrl:"./static/img/find/findBg1.jpg",
					name:"一周新歌推荐"
				},{
					id:1,
					imgUrl:"./static/img/find/findBg2.jpg",
					name:"我们说过要一起守护内心的小孩"
				},{
					id:2,
					imgUrl:"./static/img/find/findBg3.jpg",
					name:"民谣"
				},{
					id:3,
					imgUrl:"./static/img/find/findBg4.jpg",
					name:"古风歌曲"
				},{
					id:4,
					imgUrl:"./static/img/find/findBg5.jpg",
					name:"江湖热血"
				},{
					id:5,
					imgUrl:"./static/img/find/findBg6.jpg",
					name:"外国歌曲精选"
				},{
					id:5,
					imgUrl:"./static/img/find/findBg6.jpg",
					name:"国语精选"
				}],
				newDish:[{
					id:0,
					imgUrl:"./static/img/find/findBg1.jpg",
					name:"新专辑"
				},{
					id:1,
					imgUrl:"./static/img/find/findBg2.jpg",
					name:"新专辑"
				},{
					id:2,
					imgUrl:"./static/img/find/findBg3.jpg",
					name:"新专辑"
				}],
				officialSelection:[{
					id:0,
					imgUrl:"./static/img/find/findBg1.jpg",
					name:"带你感受‘巅峰时刻’！",
					title:"全职高手之巅峰荣耀 电影原声大碟"
				},{
					id:1,
					imgUrl:"./static/img/find/findBg2.jpg",
					name:"村名们都在关注#科幻",
					title:"科幻大片的好推荐"
				},{
					id:2,
					imgUrl:"./static/img/find/findBg3.jpg",
					name:"是哪吒，还是乾坤圈",
					title:"心中永远的小英雄"
				}]
			}
		}
	}
</script>

<style>
	img{
		width: 100%;
	}
	.bgWhite{
		background:#fff;
		padding: 0 10px;
	}
	.findMoudel{
		background:#e4e4e4;
		
	}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100px;
    text-align: center;
    margin: 0;
    
    
  }

  .carouselBanner>img{
  	width: 100%;
  	height: 100%;
  }
  .findBtns,.recommendSong{
  	display: flex;
  	
  	padding: 8px 0;
  	width: 100%;
  	margin-left: 0!important;
  	margin-right: 0!important;
  	
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
  }
	.findBtn{
		display: block;
		font-size: 12px;
	}
	.findIcon{
		width: 30px;
		height: 30px;
		line-height: 30px;
		margin-bottom: 8px;
		border-radius: 50%;
		display: inline-block;
		background: #db0f0f;
		color: #fff;
	}
	.findIcon>i{
		color: #fff;
	}
	.recommend{
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
	}
	.recommendPart {
		padding: 8px 0;
	}
	.recommendPart>img{
		width: 100%;
	}
	.recommendPart>.recommendName{
		font-size: 12px;
	}
	.newTitle{
		height: 50px;
    	line-height: 50px;
	}
	
	.officialSelection{
		margin-top: 10px;
	}
	.officialSelection>h1{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #e4e4e4;
	}

	.selectionPart{
		margin-bottom: 10px;
		padding: 8px;
	}
	.selectionPart>.selectName{
		color: #666;
		font-size: 14px;
		height: 30px;
		line-height: 30px;
	}
	.selectImg{
		border-radius:8px;
	}
	.selectTitle{
		height: 30px;
		line-height: 30px;
	}
</style>