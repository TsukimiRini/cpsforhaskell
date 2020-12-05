<template>
	<div class="sub-prob-container">
		<div class="one-line">
			<div class="float-left flex-align-center">问题名：</div>
			<div class="input-text-container">
				<InputText class="input-text-one-line"></InputText>
			</div>
		</div>

		<div class="one-line">
			<div class="float-left">
				<span>函数名：</span>
				<InputText style="width: 100px; height: 30px; margin-right: 10px"></InputText>
				<span>概要：</span>
			</div>

			<div class="input-text-container">
				<InputText class="input-text-one-line"></InputText>
			</div>
		</div>

		<div class="one-line">
			<div class="float-left flex-align-center">标签：</div>
			<div class="input-text-container">
				<Chips v-model="tags" class="input-text-one-line" />
			</div>
		</div>

		<div class="one-line">
			<div style="margin-bottom: 10px">输入：</div>
			<div class="input-text-container">
				<ParaItem></ParaItem>
				<ParaItem></ParaItem>
			</div>
		</div>

		<div class="one-line">
			<div style="margin-bottom: 10px">输出：</div>
			<div class="input-text-container">
				<ParaItem></ParaItem>
			</div>
		</div>

		<div class="one-line">
			<div class="float-left flex-align-center" style="float: none">输入输出映射：</div>
			<div id="mappingCode"></div>
		</div>

		<div class="one-line">
			<div style="margin-bottom: 10px">备注：</div>
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
import { ref, reactive, onMounted } from "vue";
import ParaItem from "./SubProbParaItem.vue";

import ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-haskell";
export default {
	setup() {
		let tags = ref(null);
		let note = ref(null);

		var mapping_editor = reactive({});
		onMounted(() => {
			mapping_editor = ace.edit("mappingCode", {
				maxLines: 10,
				minLines: 10,
				value: "",
				mode: "ace/mode/haskell",
			});
		});
		return {
			tags,
			ParaItem,
			note,
			mapping_editor,
		};
	},
};
</script>

<style scoped>
.sub-prob-container {
	background: #ffffff;
	border: 1px solid #bbbbbb;
	padding: 15px;
	margin-bottom: 15px;
}

.one-line {
	overflow: hidden;
	margin: 10px 0 10px 0;
	border-radius: 6px;
}
.float-left {
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
</style>
