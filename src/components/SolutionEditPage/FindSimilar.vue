<template>
	<div class="find-similar-popup-container">
		<div v-if="openSimilarPopup">
			<div class="close" @click="openSimilarPopup = !openSimilarPopup">×</div>
			<div class="popup-title">近似的解决方案</div>
			<div v-for="(item, idx) in similarData" :key="idx">
				<SimilarItem class="similar-solution-item">
					<template v-slot:title>{{ item.title }}</template>
					<template v-slot:context>{{ item.description }}</template>
				</SimilarItem>
			</div>
		</div>

		<div style="text-align: center; cursor: pointer" @click="openSimilarPopup = !openSimilarPopup">
			<i class="pi" :class="{ 'pi-chevron-down': openSimilarPopup, 'pi-chevron-up': !openSimilarPopup }"></i>
		</div>
	</div>
</template>

<script>
import SimilarItem from "@/components/HomePage/PanelCardItem.vue";
import { ref } from "vue";
export default {
	setup() {
		const similarData = [
			{
				title: "方案1",
				description: "一段描述。",
			},
			{
				title: "方案2",
				description: "一段描述。",
			},
			{
				title: "方案3",
				description: "一段描述。",
			},
		];

		let openSimilarPopup = ref(true);
		return {
			SimilarItem,
			similarData,
			openSimilarPopup,
		};
	},
};
</script>

<style scoped>
.find-similar-popup-container {
	border: 1px solid #bbbbbb;
	padding: 10px 10px 5px 10px;
	background: white;
	width: 250px;
}
.close {
	display: inline-block;
	right: 3px;
	position: absolute;
	right: 5px;
	top: 5px;
	cursor: pointer;
}

.similar-solution-item {
	height: 60px;
	padding: 8px 10px 8px 10px;
	font-size: 10px;
}
</style>
