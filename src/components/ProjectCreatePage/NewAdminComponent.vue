<template>
	<div class="new-admin-container">
		<div class="add-button">
			<i class="pi pi-plus flex-align-center"></i>
		</div>
		<div></div>
	</div>
</template>

<style scoped>
.new-admin-container {
	height: 110px;
	width: 85px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	float: left;
}
.add-button {
	border-radius: 13px;
	position: relative;
	display: flex;
	justify-content: center;
	height: 85px;
	width: 85px;
	border: 1px dashed #bbbbbb;
	cursor: pointer;
	transition: border linear 0.8s;
}
.add-button:hover {
	border: 1px solid #85bae0;
}
</style>
