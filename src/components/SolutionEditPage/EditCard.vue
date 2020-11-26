<template>
	<div class="edit-card-container">
		<EditHeader></EditHeader>
		<div class="content-grid">
			<UIMode></UIMode>
		</div>
	</div>
</template>

<script>
import EditHeader from "@/components/SolutionEditPage/EditHeader";
import UIMode from "./UIMode.vue";
export default {
	setup() {
		return {
			EditHeader,
			UIMode,
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
</style>
