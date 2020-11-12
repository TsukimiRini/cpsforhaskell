<template>
<div class="container">
    <div class="subprob-title p-text-nowrap p-text-truncate">
        <slot name="name"></slot>
    </div>
    <div class="subprob-context p-text-nowrap p-text-truncate">
        <slot name="content"></slot>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    background: #F7F7F7;
    border: solid 1px #BBBBBB;
    border-radius: 5px;
    width: 200px;
    height: 150px;
    padding: 8px 10px 8px 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    display: inline-block;
}

.subprob-title {
    font-weight: bold;
}
</style>
