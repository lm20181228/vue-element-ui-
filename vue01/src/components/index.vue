<template>
	<div >
		<el-container>
			<el-header class="fixedTop fixedPosistion">
				<el-row :gutter="20">
					<el-col :span="10" >
						<router-link to="/myMusic" class="grid-content bg-purple">我的</router-link>
					<!--	<div class="grid-content bg-purple">我的</div>-->
					</el-col>
					<el-col :span="10">
						<router-link to="/ratings" class="grid-content bg-purple">推荐</router-link>
						
						<!--<div class="grid-content bg-purple">推荐</div>-->
					</el-col>
				</el-row>
			</el-header>
			<el-main id="contentMain" class="contentMain">
				
				<keep-alive>
			      	<router-view ></router-view>
			    </keep-alive>
			</el-main>
			<el-footer class="fixedFooter fixedPosistion">
				<span>底栏容器</span>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
</script>

<style>

</style>