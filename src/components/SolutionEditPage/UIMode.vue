<template>
	<div class="content-container">
		<div style="one-line">
			<div class="field-name flex-align-center">方案名：</div>
			<div class="input-text-container">
				<InputText class="input-text-one-line"></InputText>
			</div>
		</div>
		<div style="one-line">
			<div class="field-name flex-align-center" style="float: none">摘要：</div>
			<div class="input-text-container">
				<Textarea :autoResize="true" rows="4" style="width: 100%"></Textarea>
			</div>
		</div>
		<div style="one-line">
			<div class="field-name flex-align-center">标签：</div>
			<div class="input-text-container">
				<Chips v-model="tags" class="input-text-one-line" />
			</div>
		</div>
		<div style="one-line">
			<div class="field-name flex-align-center" style="float: none">源码：</div>
			<div id="sourceCode"></div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	setup() {
		let tags = ref(null);
		return {
			tags,
		};
	},
};
</script>

<style scoped>
.content-container {
	background: #e8e8e8;
	border-radius: 6px;
	padding: 15px;
}

.one-line {
	overflow: hidden;
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
</style>
