<template>
	<div class="edit-card-container">
		<EditHeader></EditHeader>
		<div class="content-grid">
			<UIMode></UIMode>
			<div></div>
			<CodeMode></CodeMode>
		</div>
		<div class="put-center">
			<Button label="完成" icon="pi pi-check" />
		</div>
	</div>
</template>

<script>
import EditHeader from "@/components/SolutionEditPage/EditHeader";
import UIMode from "./UIMode.vue";
import CodeMode from "./CodeMode.vue";
export default {
	setup() {
		return {
			EditHeader,
			UIMode,
			CodeMode,
		};
	},
};
</script>

<style scoped>
.edit-card-container {
	background: white;
	border: 1px solid #dee2e6;
	padding: 30px 45px 30px 45px;
	margin: 8px 5px 8px 5px;
}
.content-grid {
	display: grid;
	grid-template-columns: 45% 10% 45%;
}

.put-center {
	display: flex;
	justify-items: center;
	justify-content: center;
	margin-top: 20px;
}
</style>
