<template>
	<div class="parameter-container">
		<div class="one-line">
			<div class="float-left">
				<span>类型：</span>
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
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	props: {
		type: {
			type: String,
			default: "",
		},
		desc: {
			type: String,
			default: "",
		},
	},
	setup(props) {
		let typeData = ref(props.type);
		let descData = ref(props.desc);

		return {
			typeData,
			descData,
		};
	},
};
</script>

<style scoped>
.parameter-container {
	border-radius: 7px;
	background: #f0f0f0;
	padding: 1px 10px 1px 10px;
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
