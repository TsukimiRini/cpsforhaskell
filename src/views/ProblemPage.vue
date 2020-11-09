<template>
<TheHeader>
    <span class="navbar-title"> 开发模式 </span>
</TheHeader>

<div class="general-info-card">
    <div class="problem-title">{{ problem.info.title }}</div>
    <div class="context-container">
        <span style="font-weight: bold">概要：</span>
        <span>{{ problem.info.abstract }}</span>
    </div>
    <div class="context-container">
        <span style="font-weight: bold">定义：</span>
        <pre style="margin:0px 0px 0px 0px" v-highlight><code class="haskell" style="display: inline;padding: 5px 0px 5px 0px;background:0">{{problem.info.def}}</code></pre>
    </div>
    <TagItem v-for="(tag, idx) in problem.info.tags" :key="idx">{{
      tag
    }}</TagItem>
</div>
</template>

<script>
import TagItem from "@/components/Base/TagItem";
import {
    reactive
} from "vue";
export default {
    setup() {
        const problem = reactive({
            info: {
                title: "Some problem title",
                abstract: "A short description.",
                def: "insertIntoBinaryTree :: Ord a  => a -> BinaryTree a -> BinaryTree a",
                tags: ["topic1", "topic2", "topic3"],
            },
        });

        return {
            TagItem,
            problem,
        };
    },
};
</script>

<style scoped>
.general-info-card {
    background: white;
    height: 300px;
    width: 100%;
    padding: 25px 40px 25px 40px;
}

.problem-title {
    font-size: 20px;
    font-weight: bold;
}
</style>
