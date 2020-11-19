<template>
	<div class="solution-content-container">
		<div class="card-header">
			<div class="flex-align-center flex-div">
				<span
					class="flex-align-center"
					style="font-weight: bold; font-size: 20px"
				>
					{{ solutionInfo.name }}#{{ solutionInfo.id }}
				</span>
				<Button class="info-button edit-button">编辑</Button>
			</div>
			<div class="flex-align-center flex-div">
				<SelectButton
					v-model="selectedMode"
					:options="modes"
					class="col-margin"
				></SelectButton>

				<div
					class="flex-align-center col-margin"
					v-tooltip="solutionInfo.likes + ' likes'"
				>
					<IconBase icon-name="favor" icon-color="#3e3e3e">
						<IconFavor></IconFavor>
					</IconBase>
				</div>

				<div
					class="flex-align-center"
					v-click-outside="closeSolutionMenu"
					style="position: relative"
				>
					<i
						class="pi pi-ellipsis-v"
						@click="clickSolutionMore"
						style="cursor: pointer"
					></i>
					<span
						class="solution-menu-popover"
						:style="{ visibility: solutionMenuShow }"
					>
						<PopoverMenu :options="solutionMenu"></PopoverMenu>
					</span>
				</div>
			</div>
		</div>
		<div class="card-content">
			<div>
				<span class="field-title">概要</span>
				<span>{{ solutionInfo.abstract }}</span>
			</div>
			<div>
				<span class="field-title">标签</span>
				<span v-for="(tag, idx) in solutionInfo.tags" :key="idx">
					<TagItem>{{ tag }}</TagItem>
				</span>
			</div>
			<div>
				<span class="field-title">逻辑代码</span>
				<div class="code-block">
					<pre
						style="margin: 0px 0px 0px 0px"
						v-highlight
					><code class="haskell" style="background: transparent">{{ solutionInfo.logic }}</code></pre>
				</div>
			</div>

			<div>
				<span class="field-title">子问题</span>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import PopoverMenu from "@/components/Base/PopoverMenu.vue";
import TagItem from "@/components/Base/TagItem.vue";
export default {
	props: {
		solutionInfo: {
			type: Object,
			required: true,
		},
	},
	setup() {
		const modes = ["UI模式", "Code模式"];
		let selectedMode = ref("UI模式");

		let solutionMenuShow = ref("hidden");
		const solutionMenu = [
			"引用到我的项目下",
			"查看相关讨论串",
			"在新的讨论串中引用",
			"编辑...",
		];
		const clickSolutionMore = () => {
			solutionMenuShow.value =
				solutionMenuShow.value == "hidden" ? "visible" : "hidden";
		};
		const closeSolutionMenu = () => {
			solutionMenuShow.value = "hidden";
		};

		return {
			selectedMode,
			modes,
			PopoverMenu,
			solutionMenuShow,
			solutionMenu,
			clickSolutionMore,
			closeSolutionMenu,
			TagItem,
		};
	},
};
</script>

<style scoped>
.solution-content-container {
	background: white;
	border: 1px solid #dee2e6;
	padding: 15px 15px 15px 15px;
}
.card-header {
	display: flex;
	justify-content: space-between;
	padding: 10px;
}

.edit-button {
	padding: 2px 5px 2px 5px;
	margin: 0px 5px 0px 5px;
}

.col-margin {
	margin: 0px 5px 0px 5px;
}

.solution-menu-popover {
	position: absolute;
	z-index: 1000;
	right: 0px;
	bottom: -140px;
	cursor: default;
	width: 138px;
	height: 116px;
}

.card-content {
	padding: 10px;
	line-height: 40px;
}

.field-title {
	font-weight: bold;
	margin-right: 8px;
}
</style>
