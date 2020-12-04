<template>
	<TheHeader id="theHeader">
		<span class="navbar-title"> 开发模式 </span>
		<i class="pi pi-bars" style="margin-left: 10px; cursor: pointer" @click="collapseOperation"></i>
	</TheHeader>
	<ProblemDetail :problem="problem" :visible="dialogDisplay"></ProblemDetail>
	<div @click="checkDialogDisplay">
		<SideBar :data="tree_info" :collapsed="collapseSidebar"></SideBar>
		<div class="main-container" id="main">
			<div :class="cardClass">
				<div class="problem-title">
					<div>
						<span>{{ problem.info.title }}</span>
						<span>#{{ problem.info.id }}</span>
						<Button id="problemDetailShowButton" class="info-button" style="margin-left: 5px !important" @click="dialogDisplay = !dialogDisplay">详细信息</Button>
					</div>
					<div>
						<Button class="info-button" style="margin-left: 5px !important">打包为可运行项目</Button>
						<Button class="info-button" style="margin-left: 5px !important">关注<i class="pi pi-plus" style="fontsize: 10px"></i></Button>
					</div>
				</div>
				<div :class="{ 'none-display': cardToggled }">
					<div class="context-container">
						<span style="font-weight: bold">概要：</span>
						<span>{{ problem.info.abstract }}</span>
					</div>
					<div class="context-container">
						<span style="font-weight: bold">签名：</span>
						<pre style="margin: 0px 0px 0px 0px" v-highlight><code class="haskell" style="display: inline;padding: 5px 0px 5px 0px;background:0">{{problem.info.def}}</code></pre>
					</div>
					<div class="context-container">
						<span style="font-weight: bold">标签：</span>
						<TagItem v-for="(tag, idx) in problem.info.tags" :key="idx">{{ tag }}</TagItem>
					</div>
				</div>

				<div :class="{ 'id-container': !cardToggled }">
					<i :class="iconClass" @click="toggle_up"></i>
				</div>
			</div>

			<div class="operate-bar">
				<div class="align-center" style="padding: 3px 8px 3px 8px">
					<router-link to="/solution" style="text-decoration: inherit; color: inherit; display: flex">
						<i class="pi pi-angle-left" style="font-size: 20px; cursor: pointer"></i>
						<span style="font-size: 14px" class="align-center"> 回到解决方案：分解1 </span>
					</router-link>
				</div>
			</div>

			<ScrollPanel :style="{ height: scrollHeight + 'px' }" class="scroll-content">
				<SolutionEditPage></SolutionEditPage>
			</ScrollPanel>
		</div>
	</div>
	<FindSimilar class="popover-window"></FindSimilar>
</template>

<script>
import TagItem from "@/components/Base/TagItem";
import { reactive, ref } from "vue";
import SideBar from "@/components/Base/SideBar.vue";
import SolutionEditPage from "@/components/SolutionEditPage/EditCard.vue";
import FindSimilar from "@/components/SolutionEditPage/FindSimilar.vue";
import ProblemDetail from "@/components/Base/ProblemDetailPopup.vue";
export default {
	setup() {
		const tree_info = reactive({
			parents: ["Sample Project", "problem 1", "problem 2", "problem 3"],
			siblings: ["sibling problem 1", "sibling problem 2"],
			thisProblem: "Some problem title",
		});
		const problem = reactive({
			info: {
				id: "P0001",
				title: "Some problem title",
				abstract: "A short description.",
				def: "insertIntoBinaryTree :: Ord a  => a -> BinaryTree a -> BinaryTree a",
				inputs: [
					{
						type: "Ord",
						description: "一段说明。",
					},
					{
						type: "BinaryTree",
						description: "一段说明。",
					},
				],
				output: {
					type: "Ord",
					description: "一段说明。",
				},
				mapping: `insertIntoBinaryTree x tree = Node (Leaf x) tree `,
				notes: "文档内容。",
				tags: ["topic1", "topic2", "topic3"],
			},
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
		scrollHeight.value = window.innerHeight - 56 - 250 - 44;

		const toggle_up = () => {
			cardToggled.value = cardToggled.value == true ? false : true;
			cardClass["toggled-up-card"] = cardClass["toggled-up-card"] ? false : true;
			iconClass["pi-chevron-up"] = iconClass["pi-chevron-up"] ? false : true;
			iconClass["pi-chevron-down"] = iconClass["pi-chevron-down"] ? false : true;
			if (cardToggled.value) {
				scrollHeight.value = window.innerHeight - document.getElementById("theHeader").clientHeight - 110 - 44;
			} else {
				scrollHeight.value = window.innerHeight - 56 - 250 - 44;
			}
		};

		window.addEventListener("resize", () => {
			if (cardToggled.value) {
				scrollHeight.value = window.innerHeight - document.getElementById("theHeader").clientHeight - 110 - 44;
			} else {
				scrollHeight.value = window.innerHeight - 56 - 250 - 44;
			}
		});

		let collapseSidebar = ref(true);
		const collapseOperation = () => {
			collapseSidebar.value = !collapseSidebar.value;
			if (collapseSidebar.value) {
				document.getElementById("main").style.marginLeft = 0;
			} else {
				document.getElementById("main").style.marginLeft = 200 + "px";
			}
		};

		let dialogDisplay = ref(false);
		const checkDialogDisplay = (e) => {
			if (e.target.id != "problemDetailShowButton") {
				if (dialogDisplay.value) {
					console.log("a");
					dialogDisplay.value = false;
				}
			}
		};

		return {
			tree_info,
			problem,
			TagItem,
			toggle_up,
			cardToggled,
			cardClass,
			iconClass,
			scrollHeight,
			SideBar,
			collapseSidebar,
			collapseOperation,
			SolutionEditPage,
			FindSimilar,
			ProblemDetail,
			dialogDisplay,
			checkDialogDisplay,
		};
	},
};
</script>

<style scoped>
.general-info-card {
	background: white;
	height: 250px;
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

.operate-bar {
	background: white;
	height: 44px;
	border: 1px solid #dee2e6;
	border-width: 0 0 2px 0;
	display: flex;
}

.align-center {
	align-self: center;
}

.solution-content-container {
	background: white;
	border: 1px solid #dee2e6;
}

.sidebar-container {
	background: #2d3a4b;
	height: 100%;
	position: fixed;
	z-index: 1;
	overflow: hidden;
	transition: 0.5s;
	width: 200px;
}

.main-container {
	transition: margin-left 0.5s;
}

.popover-window {
	position: fixed;
	z-index: 3;
	bottom: 5px;
	right: 5px;
}
</style>
