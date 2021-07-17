<template>
    <div style="width:100%; text-align:center;">
        <div v-for="item in getMenuList" :key="item.id">
            <template v-if="selectMenu === '/' + item.id">
                {{ item.id }}
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: ["getMenuList"],
    computed: {
        selectMenu() {
            return this.$route.path;
        },
    },
};
</script>

<style></style>
