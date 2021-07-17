<template>
    <div class="menuList">
        <div>
            <div>
                <select v-on:change="fn_changeRoute" :value="this.pageValue">
                    <option
                        v-for="(item, num) in getMenuList"
                        :key="item.id"
                        :value="num"
                    >
                        {{ item.id }}
                    </option>
                </select>
            </div>
            <div>
                <ul v-for="(item, num) in getMenuList" :key="item.id">
                    <!-- <router-link :to="item.id"> -->
                    <li
                        @click="fn_changeRoute"
                        :class="selectMenu === '/' + item.id ? sample : ''"
                        :value="num"
                    >
                        {{ item.title }}
                    </li>
                    <!-- </router-link> -->
                </ul>
            </div>
        </div>
        <div class="Section">
            <body-content :getMenuList="getMenuList"> </body-content>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import BodyContent from "./BodyContent.vue";
export default {
    data() {
        return {
            sample: "orange",
            pageValue: this.pageValue,
        };
    },
    computed: {
        ...mapGetters(["getMenuList"]),
        ...mapState(["pageValue"]),
        selectMenu() {
            return this.$route.path;
        },
    },
    methods: {
        fn_selectColor(params) {
            if (params === 0) return this.sample;
        },
        fn_changeRoute(e) {
            const valueCounter = Number(e.target.value);
            console.log(typeof valueCounter);
            if (valueCounter === 0) {
                this.$router.push({ path: this.getMenuList[0].id });
                this.pageValue = 0;
            } else if (valueCounter === 1) {
                this.$router.push({ path: this.getMenuList[1].id });
                this.pageValue = 1;
            } else if (valueCounter === 2) {
                this.$router.push({ path: this.getMenuList[2].id });
                this.pageValue = 2;
            } else {
                this.$router.push({ path: "/" });
            }

            //this.$router.push({ path: this.getMenuList[1].id });
        },
    },
    components: { BodyContent },
    mounted() {
        console.log(this.$router);
        console.log(this.$route);
    },

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
    margin-left: 7.8%;
    width: 75%;
    border: 1px solid blue;
}
ul {
    list-style: none;
    padding: 0;
}

.orange {
    background: orange;
}
</style>
