<template>
<TheHeader>
    <span class="navbar-title"> 开发模式 </span>
</TheHeader>

<div class="general-info-card">
    <div class="problem-title">
        <span>{{ problem.info.title }}</span>
        <span>#{{ problem.info.id }}</span>
        <Button class="info-button" style="margin-left:5px !important;">详细信息</Button>
    </div>
    <div class="context-container">
        <span style="font-weight: bold">概要：</span>
        <span>{{ problem.info.abstract }}</span>
    </div>
    <div class="context-container">
        <span style="font-weight: bold">定义：</span>
        <pre style="margin:0px 0px 0px 0px" v-highlight><code class="haskell" style="display: inline;padding: 5px 0px 5px 0px;background:0">{{problem.info.def}}</code></pre>
    </div>
    <div class="context-container">
        <span style="font-weight:bold">标签：</span>
        <TagItem v-for="(tag, idx) in problem.info.tags" :key="idx">{{tag}}</TagItem>
    </div>

    <div class="icon-container">
        <i class="pi pi-chevron-up icon-button"></i>
    </div>
</div>

<div id="operate-bar">
    <TabView>
        <TabPanel header="解决方案">
        </TabPanel>
        <TabPanel header="测试用例">
        </TabPanel>
    </TabView>
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
                id: "P0001",
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
    height: 250px;
    width: 100%;
    padding: 25px 40px 10px 40px;
    border-bottom: solid #BBBBBB 0.1rem;
}

.problem-title {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px 10px 5px;
}

.context-container {
    padding: 8px 0px 8px 0px;
}

.icon-container {
    margin-top: 15px;
}

.icon-button {
    left: 50%;
    position: relative;
    cursor: pointer;
}

.p-tabview .p-tabview-panels {
    padding: 0 !important;
}
</style>
