<template>
<div class="accordion-tab">
    <div class="accordion-tab-header">
        <div class="vertical-align" @click="e => (dropDown=='true') && onclick(e)" style="cursor:pointer">
            <i :class="[icon_class, dropdown_enable_status]"></i>
            <span>{{header}}</span>
        </div>

    </div>
    <div class=" accordion-tab-content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import {
    ref,
    watchEffect
} from 'vue'
export default {
    props: {
        header: String,
        dropDown: {
            type: String,
            default: 'true',
            validator: (val) => {
                return ['true', 'false'].indexOf(val) !== -1
            },
        },
    },
    setup(props) {
        let icon_class = ref("pi pi-angle-right")
        let dropdown_enable_status = ref("icon-enabled")

        const onclick = (evt) => {
            icon_class.value = icon_class.value == "pi pi-angle-right" ? "pi pi-angle-down" : "pi pi-angle-right"
            const content_ele = evt.target.parentNode.parentNode.nextElementSibling
            content_ele.style.display = content_ele.style.display == "none" || !content_ele.style.display ? "block" : "none"
        }

        watchEffect(() => {
            if (props.dropDown == 'false') {
                dropdown_enable_status.value = "icon-disabled"
                window.removeEventListener('click', onclick)
            }
        })

        return {
            onclick,
            icon_class,
            dropdown_enable_status,
        }
    },
}
</script>

<style scoped>
.accordion-tab {
    background: white;
    border: 1px solid #dee2e6;
    margin-bottom: 3px;
}

.accordion-tab-header {
    height: 40px;
    position: relative;
    padding: 0 10px 0 10px;
}

.vertical-align {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.accordion-tab-content {
    display: none;
    padding: 5px 10px 5px 10px;
}

.icon-disabled {
    color: #dee2e6;
}
</style>
