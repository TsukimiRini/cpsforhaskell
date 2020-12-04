<template>
	<Dialog :visible="visible" class="dialog-container" :showHeader="false">
		<div class="problem-title">
			<div>
				<span>{{ problem.info.title }}</span>
				<span>#{{ problem.info.id }}</span>
			</div>
		</div>
		<ScrollPanel style="height: 500px">
			<div>
				<div class="context-container">
					<span style="font-weight: bold">概要：</span>
					<span>{{ problem.info.abstract }}</span>
				</div>
				<div class="context-container">
					<span style="font-weight: bold">签名：</span>
					<pre style="margin: 0px 0px 0px 0px" v-highlight><code class="haskell" style="display: inline;padding: 5px 0px 5px 0px;background:0">{{problem.info.def}}</code></pre>
				</div>
				<div class="context-container">
					<span style="font-weight: bold">标签：</span>
					<TagItem v-for="(tag, idx) in problem.info.tags" :key="idx">{{ tag }}</TagItem>
				</div>
				<div class="context-container">
					<span style="font-weight: bold">输入：</span>
					<ParameterInfoItem v-for="(item, idx) in problem.info.inputs" :key="idx" :name="item.type" :description="item.description"></ParameterInfoItem>
				</div>
				<div class="context-container">
					<span style="font-weight: bold">输入：</span>
					<ParameterInfoItem :name="problem.info.output.type" :description="problem.info.output.description"></ParameterInfoItem>
				</div>
				<div class="context-container">
					<span style="font-weight: bold">输入输出映射：</span>
					<div class="code-block" style="margin-top: 5px">
						<pre style="margin: 0px 0px 0px 0px" v-highlight><code class="haskell" style="background: transparent">{{ problem.info.mapping }}</code></pre>
					</div>
				</div>
				<div class="context-container">
					<span style="font-weight: bold">备注：</span>
					<div class="code-block" style="margin-top: 5px">
						<pre style="margin: 0px 0px 0px 0px" v-highlight><code class="haskell" style="background: transparent">{{ problem.info.notes }}</code></pre>
					</div>
				</div>
			</div>
		</ScrollPanel>
	</Dialog>
</template>

<script>
import TagItem from "@/components/Base/TagItem";
import ParameterInfoItem from "./ParameterInfoItem.vue";
export default {
	props: {
		problem: Object,
		visible: Boolean,
	},
	setup() {
		return {
			TagItem,
			ParameterInfoItem,
		};
	},
};
</script>

<style scoped>
.dialog-container {
	width: 400px;
	height: 600px;
}

.problem-title {
	font-size: 20px;
	font-weight: bold;
	margin: 10px 0px 10px 5px;
	display: flex;
	justify-content: space-between;
}

.context-container {
	padding: 8px 0px 8px 0px;
}
</style>
