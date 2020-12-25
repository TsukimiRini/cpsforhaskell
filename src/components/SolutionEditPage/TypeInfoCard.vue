<template>
	<div class="type-container">
		<div class="one-line">
			<div class="float-left">
				<span>类型名：</span>
				<InputText
					style="width: 100px; height: 30px; margin-right: 10px"
					v-model="typeData"
				></InputText>
				<span>说明：</span>
			</div>

			<div class="input-text-container">
				<InputText class="input-text-one-line" v-model="descData"></InputText>
			</div>
		</div>

		<div>定义：</div>
		<div :id="id" style="margin: 15px 0 15px 0"></div>
	</div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-haskell";
export default {
	props: {
		id: {
			type: String,
			default: "type",
		},
		type: {
			type: String,
			default: "",
		},
		desc: {
			type: String,
			default: "",
		},
		srcCode: {
			type: String,
			default: "",
		},
	},
	setup(props) {
		var type_editor = reactive({});
		onMounted(() => {
			type_editor = ace.edit(props.id, {
				maxLines: 5,
				minLines: 5,
				value: props.srcCode,
				mode: "ace/mode/haskell",
			});
		});

		let descData = ref(props.desc);
		let typeData = ref(props.type);

		return {
			type_editor,
			descData,
			typeData,
		};
	},
};
</script>

<style scoped>
.type-container {
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
