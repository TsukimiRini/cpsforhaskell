<template>
	<div class="parameter-container">
		<div class="one-line">
			<div>
				<span>类型名：</span>
				<span style="display: inline-block; width: 100px; margin-right: 10px">{{ name }}</span>
				<span>说明：</span>
				<span>{{ description }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		description: String,
	},
};
</script>

<style scoped>
.parameter-container {
	padding: 5px;
	border: 1px solid #bbbbbb;
	margin-top: 5px;
}

.one-line {
	overflow: hidden;
	margin: 3px;
}
.float-left {
	float: left;
	margin-top: 3px;
	height: 30px;
}
</style>
