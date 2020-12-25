<template>
	<div class="content-container">
		<div class="one-line">
			<div class="field-name flex-align-center">方案名：</div>
			<div class="input-text-container">
				<AutoComplete
					class="input-text-one-line"
					v-model="solutionTitle"
					:suggestions="similarSolutions"
					@complete="searchSolution($event)"
					field="name"
					style="width: 100%"
					@item-select="solutionSelected"
				>
				</AutoComplete>
				<!-- <InputText class="input-text-one-line"></InputText> -->
			</div>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center" style="float: none">概要：</div>
			<div class="input-text-container">
				<Textarea
					:autoResize="true"
					rows="4"
					style="width: 100%"
					v-model="solutionDesc"
				></Textarea>
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
		<div class="center-icon" v-if="typeNum != 0 || subNum != 0">
			<i class="pi pi-angle-double-down" style="font-size: 25px; cursor: pointer"></i>
		</div>
		<div class="one-line" v-if="typeNum != 0">
			<div class="field-name flex-align-center" style="float: none">数据类型：</div>
			<TypeCard
				v-for="idx in typeNum"
				:key="idx"
				:id="'type' + idx"
				:type="typeData[idx - 1].name"
				:desc="typeData[idx - 1].desc"
				:srcCode="typeData[idx - 1].srcCode"
			></TypeCard>
		</div>
		<div class="one-line" v-if="subNum != 0">
			<div class="field-name flex-align-center" style="float: none">子问题：</div>
			<SubProbCard
				v-for="idx in subNum"
				:key="idx"
				:id="'subProb' + idx"
				:subProb="subProbData[idx - 1]"
			></SubProbCard>
		</div>
		<div class="one-line">
			<div class="field-name flex-align-center" style="float: none">备注：</div>
			<!-- <Editor v-model="note" editorStyle="height: 200px">
				<template #toolbar>
					<span class="ql-formats">
						<button class="ql-bold"></button>
						<button class="ql-italic"></button>
						<button class="ql-underline"></button>
					</span>
				</template>
			</Editor> -->
			<v-md-editor v-model="note" height="400px" mode="edit"></v-md-editor>
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
		let solutionDesc = ref(null);
		let tags = ref(null);
		let note = ref("");
		let srcCode = ref("");

		var source_editor = reactive({});
		onMounted(() => {
			source_editor = ace.edit("sourceCode", {
				maxLines: 10,
				minLines: 10,
				value: "",
				mode: "ace/mode/haskell",
			});
		});

		let solutionTitle = ref(null);
		let similarSolutions = ref(null);
		let solutions = reactive([
			{
				name: "3-d vector multiply",
				desc: "To solve the problem in the accelerated way.",
				tags: ["accelerate", "gpu environment", "cuda"],
				dep: "Data.Array.Accelerate",
				srcCode: `data v3 = num2v3 Float Float Float | vec2v3 (Vector Float Float Float)`,
				type: [
					{
						desc: "3-d vector data type. ",
						srcCode:
							"data v3 = num2v3 Float Float Float | vec2v3 (Vector Float Float Float)",
						name: "v3",
					},
				],
				subProb: [
					{
						title: "Generate accelerate operation of 3-d vector dot multiply",
						funcName: "dotp",
						desc: "With `v3` as inputs, output Scalar result wrapped in Acc.",
						tags: ["accelerate", "gpu environment", "cuda"],
						inputs: [
							{
								type: "v3",
								desc: "the first 3-d vector",
							},
							{
								type: "v3",
								desc: "the second 3-d vector",
							},
						],
						output: {
							type: "Acc(Scalar)",
							desc: "the dot result wrapped in Acc",
						},
						mapping: `dotp (vec2v3 (Vector x1 y1 z1)) (vec2v3 (Vector x2 y2 z2)) = Acc(Scalar x1*x2+y1*y2+z1*z2)`,
						notes: `** CUDA needed for accelerate package **
  Click [here](http://en.wikipedia.org/wiki/CUDA#Supported_GPUs) to view supported GPUs.`,
					},
				],
				notes: `** CUDA needed for accelerate package **
  Click [here](http://en.wikipedia.org/wiki/CUDA#Supported_GPUs) to view supported GPUs.`,
			},
			{
				name: "dot product of vectors",
			},
			{
				name: "get dot product of two 3-d vector",
			},
		]);
		const searchSolution = (event) => {
			setTimeout(() => {
				if (!event.query.trim().length) {
					similarSolutions.value = [...solutions];
				} else {
					similarSolutions.value = solutions.filter((solution) => {
						return solution.name.toLowerCase().startsWith(event.query.toLowerCase());
					});
				}
			}, 250);
		};

		let typeNum = ref(0);
		let subNum = ref(0);
		let typeData = ref(null);
		let subProbData = ref(null);
		const solutionSelected = (event) => {
			let solution = event.value;

			typeNum.value = solution.type.length;
			subNum.value = solution.subProb.length;

			typeData.value = solution.type;
			subProbData.value = solution.subProb;

			solutionDesc.value = solution.desc;
			tags.value = solution.tags;
			note.value = solution.notes;

			source_editor.setValue(solution.srcCode);
			source_editor.clearSelection();

			note.value = solution.notes;
			window.scrollTo(0, 0);
		};

		return {
			solutionDesc,
			tags,
			source_editor,
			TypeCard,
			SubProbCard,
			note,
			solutionTitle,
			similarSolutions,
			searchSolution,
			solutionSelected,
			typeNum,
			subNum,
			typeData,
			subProbData,
			srcCode,
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
