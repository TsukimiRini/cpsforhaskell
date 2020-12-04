<template>
	<div class="container">
		<div class="accordion-tab">
			<div class="accordion-tab-header" style="display: flex; justify-content: space-between" @click="onclick">
				<div class="accordion-tab-title">
					<span style="display: inline; float: left">
						<div>
							<router-link to="/problem/sub" style="color: inherit; text-decoration: inherit">
								<span class="href-title">
									{{ subProb.name }}
								</span>
							</router-link>
						</div>
						<div>
							签名：
							<pre v-highlight style="display: inline !important"><code class="haskell" style="background: transparent;display:inline" >{{ subProb.signature }}</code></pre>
						</div>
						<div>
							概要：
							{{ subProb.abstract }}
						</div>
					</span>
				</div>
				<span style="float: left" class="flex-align-center">
					<i :class="icon_class"></i>
				</span>
			</div>
		</div>
		<transition name="fold" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
			<div class="accordion-tab-content" v-if="content_display">
				<div>
					标签：
					<span v-for="(tag, idx) in subProb.tags" :key="idx">
						<TagItem>{{ tag }}</TagItem>
					</span>
				</div>
				<div>
					输入：
					<template v-for="(input, idx) in subProb.inputs" :key="idx">
						<SubProbInput>
							<template v-slot:type>
								{{ input.type }}
							</template>
							<template v-slot:description>
								{{ input.description }}
							</template>
						</SubProbInput>
					</template>
				</div>
				<div>
					输出：
					<template v-for="(output, idx) in subProb.outputs" :key="idx">
						<SubProbInput>
							<template v-slot:type>
								{{ output.type }}
							</template>
							<template v-slot:description>
								{{ output.description }}
							</template>
						</SubProbInput>
					</template>
				</div>
				<div>
					备注：<i class="pi pi-external-link" style="cursor: pointer"></i>
					<div class="code-block">
						{{ subProb.notes }}
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { ref } from "vue";
import TagItem from "@/components/Base/TagItem.vue";
import SubProbInput from "./SubProblemInput.vue";
export default {
	props: {
		subProb: Object,
	},
	setup() {
		let icon_class = ref("pi pi-angle-right");
		let content_display = ref(false);
		let icons_display = ref("none");

		const onclick = () => {
			// console.log(e.target);
			// const clickedClass = e.target.className;
			// if (clickedClass == "accordion-tab-header") {
			icon_class.value = icon_class.value == "pi pi-angle-right" ? "pi pi-angle-down" : "pi pi-angle-right";
			content_display.value = content_display.value == false ? true : false;
			icons_display.value = icons_display.value == "none" ? "inline" : "none";
			// }
			// let tgt = e.target;
			// while (tgt && tgt.className != "accordion-tab") {
			// 	tgt = tgt.parentNode;
			// }
			// console.log(tgt);
			// if (content_display.value) {
			// 	tgt.style.borderBottom = "0";
			// } else {
			// 	tgt.style.borderBottom = "1px solid #dee2e6";
			// }
		};

		const beforeEnter = (el) => {
			el.style.height = 0;
			el.style.padding = "0px 15px 0 15px";
		};
		const enter = (el) => {
			el.style.height = el.scrollHeight + 15 + "px";
			el.style.padding = "0px 15px 15px 15px";
		};
		const beforeLeave = enter;
		const leave = beforeEnter;

		return {
			onclick,
			icon_class,
			content_display,
			icons_display,
			TagItem,
			beforeEnter,
			enter,
			beforeLeave,
			leave,
			SubProbInput,
		};
	},
};
</script>

<style scoped>
.container {
	box-shadow: 0px 0px 7px #4950576e;
	margin-bottom: 15px;
}

.accordion-tab {
	line-height: 25px;
	background: white;
	margin-top: 5px;
}

.accordion-tab-header {
	height: 100px;
	position: relative;
	padding: 0 15px 0 15px;
	cursor: pointer;
}
.accordion-tab-header:hover {
	background: #f8f9fa;
}

.accordion-tab-title {
	align-self: center;
	display: flex;
}

.accordion-tab-content {
	background: white;
	overflow: hidden;
	transition: 0.5s ease;
	padding: 0 15px 15px 15px;
}

.icon-disabled {
	color: #dee2e6;
}

.href-title:hover {
	text-decoration: underline;
}
</style>
