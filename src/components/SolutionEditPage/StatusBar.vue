<template>
	<div class="down-side-bar">
		<div class="status-bar-container">
			<div class="flex-align-center status-item">
				<i class="pi pi-times-circle status-icon"></i>
				<span>0</span>
			</div>
			<div
				class="flex-align-center status-item"
				@click="showSimilarSolution = !showSimilarSolution"
			>
				<i class="pi pi-search status-icon"></i>
				<span>5 similar solutions</span>
			</div>
		</div>
		<div class="tab-content">
			<SimilarSolution v-if="showSimilarSolution"></SimilarSolution>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import SimilarSolution from "./StatusBarSimilarSolution.vue";
export default {
	setup() {
		let showSimilarSolution = ref(false);
		return {
			SimilarSolution,
			showSimilarSolution,
		};
	},
};
</script>

<style scoped>
.down-side-bar {
	box-shadow: 0px 0px 5px gray;
	background: #f6f6f6;
	width: 100%;
	z-index: 3;
}
.status-bar-container {
	display: flex;
	justify-content: space-between;
	border-top: solid 1px #bbbbbb;
	height: 25px;
	background: #f6f6f6;
	font-size: 13px;
	width: 100%;
	z-index: inherit;
	padding: 1px;
}
.status-icon {
	font-size: 13px;
	margin-right: 3px;
}
.status-item {
	border-radius: 6px;
	padding: 2px 5px 2px 5px;
	cursor: pointer;
}
.status-item:hover {
	background: #d4d2d2;
}
</style>
