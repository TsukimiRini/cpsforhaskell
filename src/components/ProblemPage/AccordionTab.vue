<template>
	<div class="accordion-tab">
		<div
			class="accordion-tab-header"
			style="display: flex; justify-content: space-between"
			@click="(e) => dropDown && onclick(e)"
		>
			<div class="accordion-tab-title">
				<i :class="[icon_class, dropdown_enable_status]"></i>
				<span>{{ header }}</span>
				<!--
                <IconBase icon-name="info" icon-color="#A2A2A2">
					<IconInfo></IconInfo>
				</IconBase>
                -->
			</div>
			<div
				style="
					align-self: center;
					height: 30px;
					display: flex;
					justify-content: space-between;
				"
			>
				<div :style="{ display: icons_display }" class="align-center bar-class">
					<span v-click-outside="closeFilter">
						<IconBase
							icon-name="filter"
							icon-color="#3e3e3e"
							@click="clickFilter"
						>
							<IconFilter></IconFilter>
						</IconBase>
						<span
							class="filter-popover"
							:style="{ visibility: filterPopoverShow }"
						>
							<FilterCard></FilterCard>
						</span>
					</span>
					<RankDropDown rank-object="problem"></RankDropDown>
				</div>
				<div class="align-center" v-tooltip="probLikes + ' likes'">
					<IconBase icon-name="favor" icon-color="#3e3e3e">
						<IconFavor></IconFavor>
					</IconBase>
				</div>
				<div class="align-center" v-click-outside="closeSolutionMenu">
					<i class="pi pi-ellipsis-v" @click="clickSolutionMore"></i>
					<span
						class="solution-menu-popover"
						:style="{ visibility: solutionMenuShow }"
					>
						<PopoverMenu :options="solutionMenu"></PopoverMenu>
					</span>
				</div>
			</div>
		</div>
	</div>
	<transition
		name="fold"
		@before-enter="beforeEnter"
		@enter="enter"
		@before-leave="beforeLeave"
		@leave="leave"
	>
		<div class="accordion-tab-content" v-if="content_display">
			<div style="margin: 0px 10px 10px 10px">
				<div style="height: 30px">
					<i class="pi pi-tags"></i>
					<template v-for="(tag, idx) in probTags" :key="idx">
						<TagItem>{{ tag }}</TagItem>
					</template>
				</div>
				<i class="pi pi-pencil"></i>
				{{ probAbstract }}
			</div>
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
	</transition>
</template>

<script>
import { ref, watchEffect } from "vue";
import RankDropDown from "./RankingDropDown.vue";
import SubProblemItem from "./SubProblemItem.vue";
import TagItem from "@/components/Base/TagItem.vue";
import FilterCard from "@/components/Base/FilterCard.vue";
import PopoverMenu from "@/components/Base/PopoverMenu.vue";
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
		probTags: {
			type: Array,
			default: () => [],
		},
		probLikes: {
			type: Number,
			default: () => 0,
		},
	},
	setup(props) {
		let icon_class = ref("pi pi-angle-right");
		let dropdown_enable_status = ref("icon-enabled");
		let content_display = ref(false);
		let icons_display = ref("none");

		const onclick = (e) => {
			const clickedClass = e.target.className;
			if (clickedClass == "accordion-tab-header") {
				icon_class.value =
					icon_class.value == "pi pi-angle-right"
						? "pi pi-angle-down"
						: "pi pi-angle-right";
				content_display.value = content_display.value == false ? true : false;
				icons_display.value = icons_display.value == "none" ? "inline" : "none";
			}
		};

		watchEffect(() => {
			if (props.dropDown == false) {
				dropdown_enable_status.value = "icon-disabled";
				window.removeEventListener("click", onclick);
			}
		});

		const beforeEnter = (el) => {
			el.style.height = 0;
		};
		const enter = (el) => {
			el.style.height = el.scrollHeight + "px";
		};
		const beforeLeave = enter;
		const leave = beforeEnter;

		let filterPopoverShow = ref("hidden");
		const clickFilter = () => {
			filterPopoverShow.value =
				filterPopoverShow.value == "hidden" ? "visible" : "hidden";
		};
		const closeFilter = () => {
			filterPopoverShow.value = "hidden";
		};

		let solutionMenuShow = ref("hidden");
		const solutionMenu = [
			"引用到我的项目下",
			"查看相关讨论串",
			"在新的讨论串中引用",
			"编辑...",
		];
		const clickSolutionMore = () => {
			solutionMenuShow.value =
				solutionMenuShow.value == "hidden" ? "visible" : "hidden";
		};
		const closeSolutionMenu = () => {
			solutionMenuShow.value = "hidden";
		};

		return {
			onclick,
			icon_class,
			dropdown_enable_status,
			RankDropDown,
			content_display,
			icons_display,
			SubProblemItem,
			TagItem,
			beforeEnter,
			enter,
			beforeLeave,
			leave,
			FilterCard,
			filterPopoverShow,
			clickFilter,
			closeFilter,
			PopoverMenu,
			solutionMenu,
			solutionMenuShow,
			closeSolutionMenu,
			clickSolutionMore,
		};
	},
};
</script>

<style scoped>
.accordion-tab {
	background: white;
	border: 1px solid #dee2e6;
	margin-top: 5px;
}

.accordion-tab-header {
	height: 40px;
	position: relative;
	padding: 0 10px 0 10px;
	cursor: pointer;
}
.accordion-tab-header:hover {
	background: #f8f9fa;
}

.accordion-tab-title {
	align-self: center;
	font-weight: bold;
}
.accordion-tab-title:hover {
	text-decoration: underline;
}

.accordion-tab-content {
	background: white;
	border: 1px solid #dee2e6;
	border-top: none;
	overflow: hidden;
	transition: 0.5s ease;
	padding: 15px 15px 15px 15px;
}

.vertical-align {
	margin: 0;
	position: absolute;
	top: 50%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
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

.filter-popover {
	position: absolute;
	z-index: 1000;
	right: 140px;
	bottom: -160px;
	cursor: default;
}

.bar-class {
	width: 170px;
	height: 25px;
}

.solution-menu-popover {
	position: absolute;
	z-index: 1000;
	right: 8px;
	bottom: -120px;
	cursor: default;
}
</style>
