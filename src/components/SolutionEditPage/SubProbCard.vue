<template>
	<div class="sub-prob-container">
		<div class="one-line">
			<div class="float-left flex-align-center">问题名：</div>
			<div class="input-text-container">
				<InputText class="input-text-one-line" v-model="title"></InputText>
			</div>
		</div>

		<div class="one-line">
			<div class="float-left">
				<span>函数名：</span>
				<InputText
					style="width: 100px; height: 30px; margin-right: 10px"
					v-model="funcName"
				></InputText>
				<span>概要：</span>
			</div>

			<div class="input-text-container">
				<InputText class="input-text-one-line" v-model="desc"></InputText>
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
				<ParaItem
					v-for="idx in inputsLen"
					:key="idx"
					:type="inputs[idx - 1].type"
					:desc="inputs[idx - 1].desc"
				></ParaItem>
			</div>
		</div>

		<div class="one-line">
			<div style="margin-bottom: 10px">输出：</div>
			<div class="input-text-container">
				<ParaItem :type="output.type" :desc="output.desc"></ParaItem>
			</div>
		</div>

		<div class="one-line">
			<div class="float-left flex-align-center" style="float: none">输入输出映射：</div>
			<div id="mappingCode"></div>
		</div>

		<div class="one-line">
			<div style="margin-bottom: 10px">备注：</div>
			<!-- <Editor v-model="note" editorStyle="height: 200px">
				<template #toolbar>
					<span class="ql-formats">
						<button class="ql-bold"></button>
						<button class="ql-italic"></button>
						<button class="ql-underline"></button>
					</span>
				</template>
			</Editor> -->
			<v-md-editor v-model="note" height="300px" mode="edit"></v-md-editor>
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
	props: {
		subProb: Object,
	},
	setup(props) {
		let title = ref(props.subProb.title);
		let desc = ref(props.subProb.desc);
		let funcName = ref(props.subProb.funcName);
		let tags = ref(props.subProb.tags);
		let note = ref(props.subProb.notes);
		let inputs = ref(props.subProb.inputs);
		let inputsLen = ref(props.subProb.inputs.length);
		let output = ref(props.subProb.output);

		var mapping_editor = reactive({});
		onMounted(() => {
			mapping_editor = ace.edit("mappingCode", {
				maxLines: 10,
				minLines: 10,
				value: props.subProb.mapping,
				mode: "ace/mode/haskell",
			});
		});
		return {
			title,
			desc,
			funcName,
			tags,
			ParaItem,
			note,
			mapping_editor,
			inputs,
			inputsLen,
			output,
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
