<template>
	<div class="menu-container">
		<div v-for="(option, idx) in options" :key="idx" class="menu-item">
			{{ option }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		options: {
			type: Array,
			default: () => [],
		},
	},
	setup() {},
};
</script>

<style scoped>
.menu-container {
	background: white;
	padding: 10px 15px 10px 15px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	font-size: 12px;
	line-height: 24px;
}
.menu-container::after {
	content: " ";
	position: absolute;
	bottom: 100%; /* At the top of the tooltip */
	left: 90%;
	margin-left: -5px;
	border-width: 7px;
	border-style: solid;
	border-color: transparent transparent white transparent;
}
.menu-item {
	cursor: pointer;
}
</style>
