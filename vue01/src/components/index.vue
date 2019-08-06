<template>
	<div >
		<el-container>
			<el-header class="fixedTop fixedPosistion">
				<el-row :gutter="20">
					<el-col :span="10" >
						<div class="grid-content bg-purple">我的</div>
					</el-col>
					<el-col :span="10">
						<div class="grid-content bg-purple">推荐</div>
					</el-col>
				</el-row>
			</el-header>
			<el-main id="app" class="contentMain">
				<span>主要区域容器</span>
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