<template>
	<div class="def-container">
		<div class="one-line">
			<div class="field-name flex-align-center">*项目名：</div>
			<div class="input-text-container">
				<InputText class="input-text-one-line"></InputText>
			</div>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center" style="float: none">*概要：</div>
			<div class="input-text-container">
				<Textarea :autoResize="true" rows="4" style="width: 100%"></Textarea>
			</div>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center">标签：</div>
			<div class="input-text-container">
				<Chips v-model="tags" class="input-text-one-line" />
			</div>
		</div>
		<div class="one-line">
			<div style="margin-bottom: 10px; float: none" class="field-name">依赖：</div>
			<div class="input-text-container">
				<DependencyItem v-for="i in depCnt" :key="i"></DependencyItem>
				<div class="new-dep-button">
					<i class="pi pi-plus flex-align-center new-dep-icon" @click="depCnt++"></i>
				</div>
			</div>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center" style="float: none">签名：</div>
			<div id="sourceCode"></div>
		</div>
		<div class="center-icon">
			<i class="pi pi-angle-double-down" style="font-size: 25px; cursor: pointer"></i>
		</div>
		<div class="one-line">
			<div style="margin-bottom: 10px; float: none" class="field-name">输入：</div>
			<div class="input-text-container">
				<ParaItem></ParaItem>
				<ParaItem></ParaItem>
			</div>
		</div>

		<div class="one-line">
			<div style="margin-bottom: 10px; float: none" class="field-name">输出：</div>
			<div class="input-text-container">
				<ParaItem></ParaItem>
			</div>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center" style="float: none">备注：</div>
			<Editor v-model="note" editorStyle="height: 200px">
				<template #toolbar>
					<span class="ql-formats">
						<button class="ql-bold"></button>
						<button class="ql-italic"></button>
						<button class="ql-underline"></button>
					</span>
				</template>
			</Editor>
		</div>
	</div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-haskell";

import TypeCard from "@/components/SolutionEditPage/TypeInfoCard.vue";
import ParaItem from "@/components/SolutionEditPage/SubProbParaItem.vue";
import DependencyItem from "./DependencyItem.vue";
export default {
	setup() {
		let tags = ref(null);
		let note = ref(null);

		var source_editor = reactive({});
		onMounted(() => {
			source_editor = ace.edit("sourceCode", {
				maxLines: 3,
				minLines: 3,
				value: "",
				mode: "ace/mode/haskell",
			});
		});

		let depCnt = ref(2);

		return {
			tags,
			source_editor,
			TypeCard,
			note,
			ParaItem,
			DependencyItem,
			depCnt,
		};
	},
};
</script>

<style scoped>
.def-container {
	background: white;
	border-radius: 6px;
	padding: 15px;
	margin: 15px 0 15px 0;
	border: 1px solid #bbbbbb;
}

.one-line {
	overflow: hidden;
	margin: 10px 0 10px 0;
	padding: 5px;
	border-radius: 6px;
}
.field-name {
	width: 80px;
	font-weight: bold;
	float: left;
	margin-top: 3px;
	height: 30px;
}
.input-text-container {
	overflow: hidden;
}
.input-text-one-line {
	width: 100%;
	height: 30px;
}

.center-icon {
	text-align: center;
	margin: 10px 0 10px 0;
}

.new-dep-button {
	border-radius: 7px;
	background: #f0f0f0;
	padding: 1px 10px 1px 10px;
	height: 50px;
	display: flex;
}
.new-dep-icon {
	position: absolute;
	left: 50%;
	cursor: pointer;
}
</style>
