<template>
	<div class="with-page-button">
		<div
			class="page-button-container"
			:class="{ 'cursor-pointer': lastPage }"
			@click="toLastPage"
		>
			<i class="pi pi-chevron-left page-button" v-show="lastPage"></i>
		</div>
		<div class="similar-solution-container" id="similarSolution">
			<div class="col-content">
				<div v-for="i in colCnt" :key="i">
					<SimilarItem
						class="similar-solution-item border-decoration"
						url="/solution"
						:style="{ width: colWidth + 'px' }"
						v-if="i + bias <= similarData.length"
						background-color="#fbfbfb"
					>
						<template v-slot:title>{{ similarData[i + bias - 1].title }}</template>
						<template v-slot:context>{{
							similarData[i + bias - 1].description
						}}</template>
					</SimilarItem>
					<div
						class="similar-solution-item"
						:style="{ width: colWidth + 'px' }"
						v-if="i + bias > similarData.length"
					></div>
				</div>
			</div>
			<div class="col-content">
				<div v-for="i in colCnt" :key="i + colCnt">
					<SimilarItem
						class="similar-solution-item border-decoration"
						url="/solution"
						:style="{ width: colWidth + 'px' }"
						v-if="i + colCnt + bias <= similarData.length"
						background-color="#fbfbfb"
					>
						<template v-slot:title>{{
							similarData[i + colCnt + bias - 1].title
						}}</template>
						<template v-slot:context>{{
							similarData[i + colCnt + bias - 1].description
						}}</template>
					</SimilarItem>
					<div
						class="similar-solution-item"
						:style="{ width: colWidth + 'px' }"
						v-if="i + colCnt + bias > similarData.length"
					></div>
				</div>
			</div>
		</div>
		<div
			class="page-button-container"
			:class="{ 'cursor-pointer': nextPage }"
			@click="toNextPage"
		>
			<i class="pi pi-chevron-right page-button" v-show="nextPage"></i>
		</div>
	</div>
</template>

<script>
import SimilarItem from "@/components/HomePage/PanelCardItem.vue";
import { ref, onMounted } from "vue";
export default {
	props: {
		marginBtw: {
			type: Number,
			default: 15,
		},
	},
	setup(props) {
		let colCnt = ref(0),
			colWidth = ref(0),
			bias = ref(0);
		let lastPage = ref(false),
			nextPage = ref(false);
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
			{
				title: "方案4",
				description: "一段描述。",
			},
			{
				title: "方案5",
				description: "一段描述。",
			},
			{
				title: "方案6",
				description: "一段描述。",
			},
			{
				title: "方案7",
				description: "一段描述。",
			},
		];
		let itemPerPage = 0;
		const checkLastNextPage = () => {
			if (bias.value - itemPerPage >= 0) {
				lastPage.value = true;
			} else {
				lastPage.value = false;
			}
			if (bias.value + itemPerPage >= similarData.length) {
				nextPage.value = false;
			} else {
				nextPage.value = true;
			}
		};
		const resetSimilarSolutionCol = () => {
			let width = document.getElementById("similarSolution").clientWidth - 40;
			colCnt.value = parseInt(width / 400);
			colWidth.value =
				(width - colCnt.value * props.marginBtw + props.marginBtw) / colCnt.value;
			itemPerPage = colCnt.value * 2;
			bias.value = parseInt(bias.value / itemPerPage) * itemPerPage;
			checkLastNextPage();
		};

		onMounted(() => {
			resetSimilarSolutionCol();
		});
		window.addEventListener("resize", () => {
			resetSimilarSolutionCol();
		});

		const toLastPage = () => {
			if (lastPage.value) {
				bias.value -= itemPerPage;
				checkLastNextPage();
			}
		};
		const toNextPage = () => {
			if (nextPage.value) {
				bias.value += itemPerPage;
				checkLastNextPage();
			}
		};

		return {
			similarData,
			SimilarItem,
			colCnt,
			colWidth,
			bias,
			lastPage,
			nextPage,
			toLastPage,
			toNextPage,
		};
	},
};
</script>

<style scoped>
.similar-solution-container {
	width: 100%;
	height: 300px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.col-content {
	display: flex;
	justify-content: space-between;
	height: 135px;
}

.similar-solution-item {
	padding: 8px 10px 8px 10px;
	font-size: 10px;
	height: 100%;
}
.border-decoration {
	border: 1px solid #dedede;
}

.with-page-button {
	display: flex;
	justify-content: space-between;
	padding: 10px;
}
.page-button-container {
	text-align: center;
	display: flex;
	width: 20px;
}
.cursor-pointer {
	cursor: pointer;
}
.page-button {
	align-self: center;
}
</style>
