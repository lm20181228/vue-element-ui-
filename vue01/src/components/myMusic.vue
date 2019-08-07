<template>
	<div>
	  	<el-carousel :interval="4000" type="card" trigger="click" height="100px">
		    <el-carousel-item v-for="item in 6" :key="item">
		      <h3 class="medium">{{ item }}</h3>
		    </el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 100px;
    text-align: center;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>