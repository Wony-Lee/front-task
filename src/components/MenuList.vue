<template>
    <div class="menuList">
        <div>
            <ul v-for="item in getMenuList" :key="item.id">
                <li>
                    <router-link to="/menu/:menuid">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="Section">
            <body-content>
                <template v-slot:BodyContent>
                    {{ this.$router.params }}
                </template>
            </body-content>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import BodyContent from "./BodyContent.vue";
export default {
    components: { BodyContent },
    mounted() {
        console.log(this.$router);
    },
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
    display: flex;
    border: 1px solid red;
}
.Section {
    border: 1px solid blue;
    width: 80%;
}
</style>
