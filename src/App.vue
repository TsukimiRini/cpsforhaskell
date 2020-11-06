<template>
<TheHeader>CPSForHaskell</TheHeader>
<HomePagePanel></HomePagePanel>
</template>

<script>
import "./assets/css/BaseCSS.css"
import {
    reactive,
    watch,
    computed
} from 'vue'

export default {
    setup() {
        const state = reactive({
            count: 0,
            double: computed(() => state.count * 2),
        })

        function increment() {
            state.count++
        }

        watch(state, () => {
            state.double = state.count * 2
        })

        return {
            state,
            increment,
        }
    },
}
</script>

<style>
body {
    margin: 0px;
    background: #F7F7F7;
}
</style>
