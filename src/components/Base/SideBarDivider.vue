<template>
	<div class="divider div-arrow-down"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.divider {
	position: relative;
	margin-top: 10px;
	margin-bottom: 15px;
	height: 1px;
	background: #bbbbbb;
}

.div-transparent:before {
	content: "";
	position: absolute;
	top: 0;
	left: 5%;
	right: 5%;
	width: 90%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, #bbbbbb, transparent);
}

.div-arrow-down:after {
	content: "";
	position: absolute;
	z-index: 1;
	top: -7px;
	left: calc(50% - 7px);
	width: 14px;
	height: 14px;
	transform: rotate(45deg);
	background-color: #2d3a4b;
	border-bottom: 1px solid #bbbbbb;
	border-right: 1px solid #bbbbbb;
}
</style>
