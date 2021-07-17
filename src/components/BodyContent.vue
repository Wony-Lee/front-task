<template>
    <div style="width:100%; text-align:center;">
        <div v-if="selectMenu === '/problem1'">
            <!-- {{ item }} -->
            {{ getMenuList[0] && getMenuList[0].id }}
        </div>
        <div v-if="selectMenu === '/problem2'">
            {{ getMenuList[1] && getMenuList[1].id }}
        </div>
        <div v-if="selectMenu === '/problem3'">
            {{ getMenuList[2] && getMenuList[2].id }}
        </div>
        <!-- <slot name="item">asd</slot> -->
    </div>
</template>

<script>
export default {
    props: ["getMenuList"],
    mounted() {
        console.log("path", this.$route.path);
    },
    computed: {
        selectMenu() {
            return this.$route.path;
        },
    },
};
</script>

<style></style>
