<template>
	<div :class="cardClass">
		<div class="problem-title">
			<div>
				<span>{{ problemInfo.title }}</span>
				<span>#{{ problemInfo.id }}</span>
				<Button class="info-button" style="margin-left: 5px !important"
					>详细信息</Button
				>
			</div>
			<div>
				<Button class="info-button" style="margin-left: 5px !important"
					>打包为可运行项目</Button
				>
				<Button class="info-button" style="margin-left: 5px !important"
					>关注<i class="pi pi-plus" style="fontsize: 10px"></i
				></Button>
			</div>
		</div>
		<div :class="{ 'none-display': cardToggled }">
			<div class="context-container">
				<span style="font-weight: bold">概要：</span>
				<span>{{ problemInfo.abstract }}</span>
			</div>
			<div class="context-container">
				<span style="font-weight: bold">签名：</span>
				<pre
					style="margin: 0px 0px 0px 0px"
					v-highlight
				><code class="haskell" style="display: inline;padding: 5px 0px 5px 0px;background:0">{{problemInfo.def}}</code></pre>
			</div>
			<div class="context-container">
				<span style="font-weight: bold">标签：</span>
				<TagItem v-for="(tag, idx) in problemInfo.tags" :key="idx">{{
					tag
				}}</TagItem>
			</div>
		</div>

		<div :class="{ 'id-container': !cardToggled }">
			<i :class="iconClass" @click="toggle_up"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		problemInfo: {
			type: Object,
			required: true,
		},
	},
	setup() {
		let cardToggled = ref(false);

		let cardClass = reactive({
			"general-info-card": true,
			"toggled-up-card": false,
		});

		let iconClass = reactive({
			pi: true,
			"pi-chevron-up": true,
			"pi-chevron-down": false,
			"icon-button": true,
		});
		return {
			cardToggled,
			cardClass,
			iconClass,
		};
	},
};
</script>

<style scoped>
.general-info-card {
	background: white;
	height: 250px;
	width: 100%;
	padding: 25px 40px 10px 40px;
	border-bottom: solid #bbbbbb 0.1rem;
}

.toggled-up-card {
	height: 110px;
}

.problem-title {
	font-size: 20px;
	font-weight: bold;
	margin: 10px 0px 10px 5px;
	display: flex;
	justify-content: space-between;
}

.none-display {
	display: none;
}

.context-container {
	padding: 8px 0px 8px 0px;
}

.icon-container {
	margin-top: 15px;
}

.icon-button {
	left: 50%;
	position: relative;
	cursor: pointer;
}
</style>
