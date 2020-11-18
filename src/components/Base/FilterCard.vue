<template>
	<div class="filter-container">
		<div>
			<span class="p-input-icon-right">
				<i class="pi pi-search" />
				<InputText
					type="text"
					v-model="tagSearch"
					placeholder="Search"
					style="height: 25px; width: 100px"
				/>
			</span>
		</div>
		<div>
			<template v-for="(tag, idx) in filterTags" :key="idx">
				<TagItem> tag </TagItem>
			</template>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import TagItem from "./TagItem.vue";
export default {
	props: {
		filterTags: {
			type: Array,
			default: () => [],
		},
	},
	setup() {
		let tagSearch = ref(null);
		return {
			TagItem,
			tagSearch,
		};
	},
};
</script>

<style scoped>
.filter-container {
	min-height: 160px;
	width: 130px;
	background: white;
	padding: 10px 15px 10px 15px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.filter-container::after {
	content: " ";
	position: absolute;
	bottom: 100%; /* At the top of the tooltip */
	left: 50%;
	margin-left: -5px;
	border-width: 7px;
	border-style: solid;
	border-color: transparent transparent white transparent;
}
</style>
