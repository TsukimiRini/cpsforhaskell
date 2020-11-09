<template>
<div class="container">
    <div class="item-title">
        <slot name="title"></slot>
    </div>
    <div class="item-context">
        <slot name="context"></slot>
    </div>
</div>
</template>

<style scoped>
.container {
    background: #ECECEC;
    border-radius: 6px;
    padding: 15px 15px 15px 15px;
}

.item-title {
    font-weight: bold;
    text-align: center;
}
</style>
