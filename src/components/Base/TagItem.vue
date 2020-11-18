<template>
	<span class="tag-container">
		<slot>somthing</slot>
	</span>
</template>

<script>
export default {};
</script>

<style scoped>
.tag-container {
	background: #e6e6e6;
	border-radius: 6px;
	padding: 3px 8px 3px 8px;
	margin: 5px 6px 5px 6px;
	height: 25px;
	min-width: 20px;
	font-size: 9px;
}
</style>
