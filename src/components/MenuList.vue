<template>
    <div class="menuList">
        <div>
            <ul v-for="item in getMenuList" :key="item.id">
                <li>
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: { ...mapGetters(["getMenuList"]) },
    created() {
        const callMenuList = () => {
            this.$store.dispatch("fetchMenuList");
        };
        callMenuList();
    },
};
</script>

<style scoped>
.menuList {
}
</style>
