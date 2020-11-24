<template>
	<div class="sidebar-container" :style="{ width: clientWidth + 'px' }">
		<div v-for="(parent, idx) in data.parents" :key="idx">
			<div class="item">
				{{ parent }}
			</div>
			<div style="width: 180px; margin: 0px 10px 0px 10px">
				<SideBarDivider></SideBarDivider>
			</div>
		</div>
		<div class="item active-problem">
			{{ data.thisProblem }}
		</div>
		<div v-for="(sibling, idx) in data.siblings" :key="idx" class="item">
			{{ sibling }}
		</div>
	</div>
</template>

<script>
import { ref, watchEffect } from "vue";
import SideBarDivider from "./SideBarDivider.vue";
export default {
	props: {
		data: Object,
		width: {
			type: Number,
			default: 200,
		},
		collapsed: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		console.log(props.collapsed);
		let clientWidth = ref(0);
		watchEffect(() => {
			if (props.collapsed) {
				clientWidth.value = 0;
			} else {
				clientWidth.value = props.width;
			}
		});
		return {
			clientWidth,
			SideBarDivider,
		};
	},
};
</script>

<style scoped>
.sidebar-container {
	background: #2d3a4b;
	height: 100%;
	position: fixed;
	z-index: 2;
	overflow-x: hidden;
	transition: 0.5s;

	text-align: center;
	color: #c8c8c8;
	line-height: 35px;
	width: 0;
}
.active-problem {
	background: #c6c6c6;
	border-radius: 6px;
	color: #111111;
}
.item {
	display: block;
	cursor: pointer;
	width: 180px;
	margin: 5px 10px 5px 10px;
}
</style>
