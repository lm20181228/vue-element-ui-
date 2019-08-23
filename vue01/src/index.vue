<template>
	<div >
		<el-container>
			<!--公用头部-->
			<router-view class="main" name="header"></router-view>
			<el-main id="contentMain" class="contentMain">
				
				<keep-alive>
			      	<router-view ></router-view>
			    </keep-alive>
			</el-main>
			<!--公用尾部-->
			<router-view class="main" name="footer"></router-view>
		</el-container>
	</div>
</template>

<script>
	
	
</script>

<style>

</style>