<template>
	<Dropdown
		v-model="selectedType"
		:options="rank_type"
		optionLabel="name"
		placeholder="排序"
		class="default-dropdown"
	/>
</template>

<script>
import { ref } from "vue";
export default {
	props: {
		rankObject: {
			type: String,
			validater: (val) => {
				return ["solution", "problem"].indexOf(val) !== -1;
			},
		},
	},
	setup(props) {
		let rank_type;
		let selectedType = ref(null);
		if (props.rankObject == "solution") {
			rank_type = [
				{
					name: "关注度从高到低",
					code: "follow_down",
				},
				{
					name: "时间从近到远",
					code: "time_up",
				},
				{
					name: "时间从远到近",
					code: "time_down",
				},
				{
					name: "参与人数从多到少",
					code: "involve_down",
				},
				{
					name: "参与人数从少到多",
					code: "involve_up",
				},
			];
		} else if (props.rankObject == "problem") {
			rank_type = [
				{
					name: "喜爱度从高到低",
					code: "favor_down",
				},
				{
					name: "时间从近到远",
					code: "time_up",
				},
				{
					name: "时间从远到近",
					code: "time_down",
				},
				{
					name: "参与人数从多到少",
					code: "involve_down",
				},
				{
					name: "参与人数从少到多",
					code: "involve_up",
				},
			];
		}

		return {
			rank_type,
			selectedType,
		};
	},
};
</script>

<style scoped>
.default-dropdown {
	width: 140px;
	height: 25px;
	margin: 0px 5px 0px 5px;
}
</style>
