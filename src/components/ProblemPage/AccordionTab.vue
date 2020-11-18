<template>
	<div class="accordion-tab">
		<div
			class="accordion-tab-header"
			style="display: flex; justify-content: space-between"
		>
			<div
				style="align-self: center; cursor: pointer"
				@click="(e) => dropDown && onclick(e)"
			>
				<i :class="[icon_class, dropdown_enable_status]"></i>
				<span>{{ header }}</span>
				<IconBase icon-name="info" icon-color="#A2A2A2">
					<IconInfo></IconInfo>
				</IconBase>
			</div>
			<div
				style="
					align-self: center;
					height: 30px;
					display: flex;
					justify-content: space-between;
				"
			>
				<div :style="{ display: icons_display }" class="align-center">
					<IconBase icon-name="filter" icon-color="#3e3e3e">
						<IconFilter></IconFilter>
					</IconBase>
					<RankDropDown rank-object="problem"></RankDropDown>
				</div>
				<div class="align-center">
					<IconBase icon-name="favor" icon-color="#3e3e3e">
						<IconFavor></IconFavor>
					</IconBase>
					<i class="pi pi-ellipsis-v"></i>
				</div>
			</div>
		</div>
		<div class="accordion-tab-content" :style="{ display: content_display }">
			<template v-for="(subprob, idx) in subProblems" :key="idx">
				<SubProblemItem>
					<template v-slot:name>
						{{ subprob.name }}
					</template>
					<template v-slot:content>
						{{ subprob.abstract }}
					</template>
				</SubProblemItem>
			</template>
		</div>
	</div>
</template>

<script>
import { ref, watchEffect } from "vue";
import RankDropDown from "./RankingDropDown.vue";
import SubProblemItem from "./SubProblemItem.vue";
export default {
	props: {
		header: String,
		dropDown: {
			type: Boolean,
			default: true,
		},
		subProblems: {
			type: Array,
			default: () => [],
		},
		probAbstract: {
			type: String,
			default: () => "",
		},
	},
	setup(props) {
		let icon_class = ref("pi pi-angle-right");
		let dropdown_enable_status = ref("icon-enabled");
		let content_display = ref("none");
		let icons_display = ref("none");

		const onclick = () => {
			icon_class.value =
				icon_class.value == "pi pi-angle-right"
					? "pi pi-angle-down"
					: "pi pi-angle-right";
			content_display.value =
				content_display.value == "none" ? "block" : "none";
			icons_display.value = icons_display.value == "none" ? "inline" : "none";
			console.log("aaa");
		};

		watchEffect(() => {
			if (props.dropDown == false) {
				dropdown_enable_status.value = "icon-disabled";
				window.removeEventListener("click", onclick);
			}
		});

		return {
			onclick,
			icon_class,
			dropdown_enable_status,
			RankDropDown,
			content_display,
			icons_display,
			SubProblemItem,
		};
	},
};
</script>

<style scoped>
.accordion-tab {
	background: white;
	border: 1px solid #dee2e6;
	margin-bottom: 5px;
}

.accordion-tab-header {
	height: 40px;
	position: relative;
	padding: 0 10px 0 10px;
}

.vertical-align {
	margin: 0;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
}

.accordion-tab-content {
	display: none;
	padding: 5px 15px 15px 15px;
}

.icon-disabled {
	color: #dee2e6;
}

.ele-disabled {
	display: none;
}

.align-center {
	align-self: center;
}
</style>
