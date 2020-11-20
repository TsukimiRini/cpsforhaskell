<template>
	<div class="input-container">
		<span style="display: inline-block; width: 25%">类型：<slot name="type"></slot></span>
		<span>说明：<slot name="description"></slot></span>
	</div>
</template>
<script>
export default {};
</script>

<style scoped>
.input-container {
	border: 1px solid #dee2e6;
	padding: 5px 15px 5px 15px;
	margin: 5px 5px 10px 5px;
}
</style>
