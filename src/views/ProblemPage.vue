<template>
	<TheHeader id="theHeader">
		<span class="navbar-title"> 开发模式 </span>
	</TheHeader>

	<div :class="cardClass">
		<div class="problem-title">
			<div>
				<span>{{ problem.info.title }}</span>
				<span>#{{ problem.info.id }}</span>
				<Button class="info-button" style="margin-left: 5px !important"
					>详细信息</Button
				>
			</div>
			<div>
				<Button class="info-button" style="margin-left: 5px !important"
					>打包为可运行项目</Button
				>
				<Button class="info-button" style="margin-left: 5px !important"
					>关注<i class="pi pi-plus" style="fontsize: 10px"></i
				></Button>
			</div>
		</div>
		<div :class="{ 'none-display': cardToggled }">
			<div class="context-container">
				<span style="font-weight: bold">概要：</span>
				<span>{{ problem.info.abstract }}</span>
			</div>
			<div class="context-container">
				<span style="font-weight: bold">定义：</span>
				<pre
					style="margin: 0px 0px 0px 0px"
					v-highlight
				><code class="haskell" style="display: inline;padding: 5px 0px 5px 0px;background:0">{{problem.info.def}}</code></pre>
			</div>
			<div class="context-container">
				<span style="font-weight: bold">标签：</span>
				<TagItem v-for="(tag, idx) in problem.info.tags" :key="idx">{{
					tag
				}}</TagItem>
			</div>
		</div>

		<div :class="{ 'id-container': !cardToggled }">
			<i :class="iconClass" @click="toggle_up"></i>
		</div>
	</div>

	<div id="operate-bar">
		<TabView>
			<TabPanel header="解决方案">
				<ScrollPanel
					:style="{ height: scrollHeight + 'px' }"
					class="custombar1"
				>
					<div v-for="(solution, idx) in problem.solutions" :key="idx">
						<AccordionTab
							:header="solution.name"
							:sub-problems="solution.sub_prob"
							:prob-abstract="solution.abstract"
							:prob-tags="solution.tags"
							:prob-likes="solution.likes"
						></AccordionTab>
					</div>
				</ScrollPanel>
			</TabPanel>
			<TabPanel header="测试用例"> </TabPanel>
		</TabView>
	</div>
</template>

<script>
import TagItem from "@/components/Base/TagItem";
import AccordionTab from "@/components/ProblemPage/AccordionTab.vue";
import RankDropDown from "@/components/ProblemPage/RankingDropDown.vue";
import { reactive, ref } from "vue";
export default {
	setup() {
		const problem = reactive({
			info: {
				id: "P0001",
				title: "Some problem title",
				abstract: "A short description.",
				def:
					"insertIntoBinaryTree :: Ord a  => a -> BinaryTree a -> BinaryTree a",
				tags: ["topic1", "topic2", "topic3"],
			},
			solutions: [
				{
					id: "S0001",
					name: "方案1",
					abstract: "A short description.",
					tags: ["topic1", "topic2", "topic3"],
					likes: 167,
					sub_prob: [
						{
							id: "S0002",
							name: "子问题1",
							abstract: "简单的说明。",
						},
						{
							id: "S0003",
							name: "子问题2",
							abstract: "简单的说明。",
						},
						{
							id: "S0004",
							name: "子问题3",
							abstract: "简单的说明。",
						},
					],
				},
				{
					id: "S0005",
					name: "方案2",
					abstract: "A short description.",
					tags: ["topic1", "topic2", "topic3"],
					likes: 167,
					sub_prob: [
						{
							id: "S0006",
							name: "子问题1",
							abstract: "简单的说明。",
						},
						{
							id: "S0007",
							name: "子问题2",
							abstract: "简单的说明。",
						},
					],
				},
				{
					id: "S0008",
					name: "方案3",
					abstract: "A short description.",
					tags: ["topic1", "topic2", "topic3"],
					likes: 167,
					sub_prob: [],
				},
				{
					id: "S0009",
					name: "方案4",
					abstract: "A short description.",
					tags: ["topic1", "topic2", "topic3"],
					likes: 167,
					sub_prob: [
						{
							id: "S0010",
							name: "子问题1",
							abstract: "简单的说明。",
						},
						{
							id: "S0011",
							name: "子问题2",
							abstract: "简单的说明。",
						},
						{
							id: "S0012",
							name: "子问题3",
							abstract: "简单的说明。",
						},
					],
				},
			],
		});

		let cardToggled = ref(false);

		let cardClass = reactive({
			"general-info-card": true,
			"toggled-up-card": false,
		});

		let iconClass = reactive({
			pi: true,
			"pi-chevron-up": true,
			"pi-chevron-down": false,
			"icon-button": true,
		});

		let scrollHeight = ref(0);
		scrollHeight.value = window.innerHeight - 56 - 250 - 60;

		const toggle_up = () => {
			cardToggled.value = cardToggled.value == true ? false : true;
			cardClass["toggled-up-card"] = cardClass["toggled-up-card"]
				? false
				: true;
			iconClass["pi-chevron-up"] = iconClass["pi-chevron-up"] ? false : true;
			iconClass["pi-chevron-down"] = iconClass["pi-chevron-down"]
				? false
				: true;
			if (cardToggled.value) {
				scrollHeight.value =
					window.innerHeight -
					document.getElementById("theHeader").clientHeight -
					110 -
					60;
			} else {
				scrollHeight.value = window.innerHeight - 56 - 250 - 60;
			}
		};

		window.addEventListener("resize", () => {
			if (cardToggled.value) {
				scrollHeight.value =
					window.innerHeight -
					document.getElementById("theHeader").clientHeight -
					110 -
					60;
			} else {
				scrollHeight.value = window.innerHeight - 56 - 250 - 60;
			}
		});

		return {
			problem,
			TagItem,
			AccordionTab,
			RankDropDown,
			toggle_up,
			cardToggled,
			cardClass,
			iconClass,
			scrollHeight,
		};
	},
};
</script>

<style scoped>
.general-info-card {
	background: white;
	height: 250px;
	width: 100%;
	padding: 25px 40px 10px 40px;
	border-bottom: solid #bbbbbb 0.1rem;
}

.toggled-up-card {
	height: 110px;
}

.problem-title {
	font-size: 20px;
	font-weight: bold;
	margin: 10px 0px 10px 5px;
	display: flex;
	justify-content: space-between;
}

.none-display {
	display: none;
}

.context-container {
	padding: 8px 0px 8px 0px;
}

.icon-container {
	margin-top: 15px;
}

.icon-button {
	left: 50%;
	position: relative;
	cursor: pointer;
}
</style>
