<template>
	<div class="content-container">
		<div id="codeMode"></div>
	</div>
</template>

<script>
import { onMounted, reactive } from "vue";
import ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-haskell";
export default {
	setup() {
		var code_mode_editor = reactive({});
		onMounted(() => {
			code_mode_editor = ace.edit("codeMode", {
				minLines: 10,
				value: "",
				mode: "ace/mode/haskell",
			});
		});

		return {
			code_mode_editor,
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
#codeMode {
	height: 100%;
}
</style>
