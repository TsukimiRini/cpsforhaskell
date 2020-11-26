<template>
	<div class="header-grid">
		<div style="text-align: center"><span class="title">UI模式</span></div>
		<div class="center-container">
			<IconBase icon-color="#3e3e3e">
				<IconTransfer></IconTransfer>
			</IconBase>
		</div>
		<div style="text-align: center"><div class="title">Code模式</div></div>
	</div>
	<div style="text-align: right">
		<i class="pi pi-download" style="margin-right: 13px; font-size: 22px; cursor: pointer; color: #3e3e3e"></i>
		<i class="pi pi-upload" style="font-size: 22px; cursor: pointer; color: #3e3e3e"></i>
	</div>
	<div class="divider"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-grid {
	display: grid;
	grid-template-columns: 45% 10% 45%;
}
.title {
	background: #e8e8e8;
	border-radius: 6px;
	display: inline-block;
	padding: 10px;
	font-size: 22px;
}
.divider {
	background: #bbbbbb;
	height: 1px;
}
.center-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
