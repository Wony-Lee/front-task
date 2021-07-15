<template>
    <div>
        <div>
            <menu-list></menu-list>
        </div>
        <div></div>
    </div>
</template>

<script>
import MenuList from "./MenuList.vue";
export default {
    components: { MenuList },
};
</script>

<style scoped>
.Container {
    display: flex;
    border: 1px solid blue;
}
.Container .SideBar {
    width: 25%;
    border: 1px solid green;
}
.Container .BodySection {
    width: 75%;
}
</style>
