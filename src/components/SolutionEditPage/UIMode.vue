<template>
	<div class="content-container">
		<div class="one-line">
			<div class="field-name flex-align-center">方案名：</div>
			<div class="input-text-container">
				<InputText class="input-text-one-line"></InputText>
			</div>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center" style="float: none">摘要：</div>
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
			<div class="field-name flex-align-center" style="float: none">源码：</div>
			<div id="sourceCode"></div>
		</div>
		<div class="center-icon">
			<i class="pi pi-angle-double-down" style="font-size: 25px; cursor: pointer"></i>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center" style="float: none">数据类型：</div>
			<TypeCard id="type1"></TypeCard>
			<TypeCard id="type2"></TypeCard>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center" style="float: none">子问题：</div>
			<SubProbCard></SubProbCard>
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

import TypeCard from "./TypeInfoCard.vue";
import SubProbCard from "./SubProbCard.vue";
export default {
	setup() {
		let tags = ref(null);

		var source_editor = reactive({});
		onMounted(() => {
			source_editor = ace.edit("sourceCode", {
				maxLines: 10,
				minLines: 10,
				value: "",
				mode: "ace/mode/haskell",
			});
		});

		return {
			tags,
			source_editor,
			TypeCard,
			SubProbCard,
		};
	},
};
</script>

<style scoped>
.content-container {
	background: #f6f6f6;
	border-radius: 6px;
	padding: 15px;
	margin: 15px 0 15px 0;
}

.one-line {
	overflow: hidden;
	margin: 10px 0 10px 0;
	padding: 5px;
	border-radius: 6px;
}
.one-line:hover {
	background: #dedede99;
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
	margin: 35px 0 35px 0;
}
</style>
