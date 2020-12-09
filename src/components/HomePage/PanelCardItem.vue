<template>
	<div class="container div-with-top-margin" :style="{ background: backgroundColor }">
		<router-link :to="url" style="color: #6a8cc8">
			<div class="item-title">
				<slot name="title"></slot>
			</div>
		</router-link>

		<div class="item-context">
			<slot name="context"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		url: String,
		backgroundColor: {
			type: String,
			default: "#ececec",
		},
	},
};
</script>

<style scoped>
.container {
	border-radius: 6px;
	padding: 15px 15px 15px 15px;
}

.item-title {
	font-weight: bold;
}
</style>
