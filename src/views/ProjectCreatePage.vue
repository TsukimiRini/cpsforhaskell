<template>
	<TheHeader id="theHeader">
		<span class="navbar-title"> 开发模式 </span>
	</TheHeader>
	<ScrollPanel :style="{ height: scrollHeight + 'px' }">
		<div class="main-container">
			<div>
				<div class="section-title">问题定义</div>
				<DefCard></DefCard>
			</div>
			<div>
				<div class="section-title">管理信息</div>
				<AdminCard></AdminCard>
			</div>
			<div class="put-center">
				<Button label="完成" icon="pi pi-check" />
			</div>
		</div>
	</ScrollPanel>
</template>

<script>
import { ref } from "vue";
import DefCard from "@/components/ProjectCreatePage/DefinitionCard.vue";
import AdminCard from "@/components/ProjectCreatePage/AdminInfoCard.vue";
export default {
	setup() {
		let scrollHeight = ref(0);
		scrollHeight.value = window.innerHeight - 56;
		return {
			DefCard,
			scrollHeight,
			AdminCard,
		};
	},
};
</script>

<style scoped>
.main-container {
	background: #f7f7f7;
	padding: 40px;
}
.section-title {
	font-size: 28px;
}

.put-center {
	display: flex;
	justify-items: center;
	justify-content: center;
	margin-top: 20px;
}
</style>
