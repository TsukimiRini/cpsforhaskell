<template>
<TieredMenu :model="userOperations" class="hover-menu" />
</template>

<script>
export default {
    setup() {
        const userOperations = [{
                label: "项目",
            },
            {
                label: "方案",
            },
            {
                label: "动态",
            },
            {
                separator: true,
            },
            {
                label: "注销",
            },
        ]

        return {
            userOperations,
        }
    }
}
</script>

<style scoped>
.hover-menu {
    display: none;
    position: absolute;
    right: 0;
}
</style>
