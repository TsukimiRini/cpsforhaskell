<template>
<Menubar :model="menuItems" id="headerMenu">
    <template #start>
        <img alt="logo" src="../../assets/logo.png" height="40" class="center-block" style="margin-right:10px" />
        CPSForHaskell
        <slot class="center-block"></slot>
    </template>
    <template #end>
        <div @mouseover="popupMenu" @mouseout="shutMenu" style="cursor: pointer">
            <img alt="userIcon" src="../../assets/logo.png" height="40" class="menu-bar-icon center-block div-with-right-margin" />
            <div class="menu-bar-text center-block div-with-right-margin">ADMIN</div>
            <i class="pi pi-angle-down center-block div-with-right-margin"></i>
            <UserMenu id="userMenu" style="width:150px"></UserMenu>
        </div>

    </template>
</Menubar>
</template>

<script>
import UserMenu from "./UserMenu"

export default {
    setup() {
        const menuItems = [{
                label: "发现",
                to: "/",
            },
            {
                label: "讨论",
                to: "/problem"
            },
        ];

        const popupMenu = () => {
            document.getElementById("userMenu").style.display = "block"
        }

        const shutMenu = () => {
            document.getElementById("userMenu").style.display = "none"
        }

        return {
            menuItems,
            UserMenu,
            popupMenu,
            shutMenu,
        };
    },
};
</script>

<style>
.p-menubar {
    margin-top: 0px !important;
    background: #2d3a4b !important;
    border: 0px !important;
    border-radius: 0px !important;
    color: #CEC9C9 !important;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-link .p-menuitem-text {
    color: #CEC9C9 !important;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-link .p-menuitem-icon {
    margin-right: 0 !important;
}

.p-menubar .p-menuitem-link .p-menuitem-icon {
    margin-right: 0;
}

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-link:not(.p-disabled):hover {
    background: #182838 !important;
}

.p-menubar .p-menubar-custom,
.p-menubar .p-menubar-end {
    margin-left: 0 !important;
}

.p-menubar ul {
    margin-left: auto !important;
}
</style><style scoped>
.menu-bar-icon {
    border-radius: 5px;
    padding: 3px;
    margin: 0px 5px 0px 5px;
    background: white;
}
</style>
