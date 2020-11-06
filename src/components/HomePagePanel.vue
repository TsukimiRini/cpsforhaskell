<template>
<div style="margin: 10px 20px 10px 20px">
    <div class="p-grid nested-grid">
        <div class="p-col-5 col-flex-container">
            <span class="p-input-icon-left div-with-top-margin" style="width:100%">
                <i class="pi pi-search" />
                <InputText type="text" v-model="searchInput" placeholder="搜索感兴趣的内容..." style="width:100%" />
            </span>
            <Card class="div-with-top-margin col-flex-ele">
                <template v-slot:title>关注动态</template>
                <template v-slot:content>
                    <div v-for="n in 3" :key="n">
                        <PanelCardItem>
                            <template v-slot:title>
                                FantasyAPP
                            </template>
                            <template v-slot:context>
                                An intelligent working platform created by Alibaba Group to support tens of millions of...
                            </template>
                        </PanelCardItem>
                    </div>

                    <div class="more-topics-container">
                        <a href="#more" class="more-topics">更多...</a>
                    </div>

                </template>
            </Card>
        </div>
        <div class="p-col-7 col-flex-container">
            <Card class="div-with-top-margin" style="text-align:center">
                <template v-slot:content>
                    <div>
                        想和社区中的人们一起完成一个全新的项目？有一个无法解决的复杂问题？
                    </div>
                    <Button label='创建项目' class="div-with-top-margin" />
                </template>
            </Card>
            <Card class="div-with-top-margin  col-flex-ele" style="height:auto">
                <template v-slot:title>关注推荐</template>
                <template v-slot:content>
                    <div class="p-grid nested-grid">
                        <div class="p-col-6">
                            <div v-for="n in 2" :key="n">
                                <PanelCardItem>
                                    <template v-slot:title>
                                        FantasyAPP
                                    </template>
                                    <template v-slot:context>
                                        An intelligent working platform created by Alibaba Group to support tens of millions of...
                                    </template>
                                </PanelCardItem>
                            </div>
                        </div>

                        <div class="p-col-6">
                            <div v-for="n in 2" :key="n">
                                <PanelCardItem>
                                    <template v-slot:title>
                                        FantasyAPP
                                    </template>
                                    <template v-slot:context>
                                        An intelligent working platform created by Alibaba Group to support tens of millions of...
                                    </template>
                                </PanelCardItem>
                            </div>
                        </div>
                    </div>

                    <div class="more-topics-container">
                        <a href="#more" class="more-topics">换一批...</a>
                    </div>
                </template>
            </Card>
        </div>
    </div>
    <div class="p-grid nested-grid">
        <Card class=" div-with-top-margin p-col">
            <template v-slot:content>
                <div class="p-grid nested-grid">
                    <div class="p-col-4">
                        <PanelRankingList>
                            <template v-slot:title>
                                近期关注最多的项目
                            </template>
                            <template v-slot:context>
                                <div v-for="(item,idx) in ranking_data" :key="idx">
                                    {{idx+1}}. {{item}}
                                </div>
                            </template>
                        </PanelRankingList>
                    </div>

                    <div class="p-col-4">
                        <PanelRankingList>
                            <template v-slot:title>
                                近期关注最多的模块
                            </template>
                            <template v-slot:context>
                                <div v-for="(item,idx) in ranking_data" :key="idx">
                                    {{idx+1}}. {{item}}
                                </div>
                            </template>
                        </PanelRankingList>
                    </div>

                    <div class="p-col-4">
                        <PanelRankingList>
                            <template v-slot:title>
                                近期点赞最多的解决方案
                            </template>
                            <template v-slot:context>
                                <div v-for="(item,idx) in ranking_data" :key="idx">
                                    {{idx+1}}. {{item}}
                                </div>
                            </template>
                        </PanelRankingList>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</div>
</template>

<script>
import PanelCardItem from "./PanelCardItem"
import PanelRankingList from "./PanelRankingList"
import {
    ref
} from 'vue';

export default {
    setup() {
        const searchInput = ref(null)

        const ranking_data = [
            "HarmonyOS",
            "PanDownloadServer",
            "eleventy-high-performance-blog",
            "Connected Home over IP",
            "UTM",
            "ZY-Player",
            "Wav2Lip",
            "Sushiswap-frontend",
            "OpenJDK",
            "nuxt.js",
        ]
        return {
            searchInput,
            ranking_data,
            PanelCardItem,
            PanelRankingList,
        }
    },
};
</script>

<style scoped>
.more-topics {
    text-decoration: none;
}

.more-topics-container {
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
}
</style><style>
.p-card-title {
    margin-bottom: 0 !important;
}
</style>
