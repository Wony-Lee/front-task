<template>
    <div class="menuList">
        <div class="menuStyle">
            <div>
                <select
                    class="selectStyle"
                    v-on:change="fn_changeRoute"
                    :value="this.pageVal"
                >
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
                    <li
                        @click="fn_changeRoute"
                        :class="selectMenu === '/' + item.id ? sample : ''"
                        :value="num"
                    >
                        {{ item.title }}
                    </li>
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
            pageVal: this.pageValue,
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
            for (let i = 0; i < 3; i++) {
                const result = `/${this.getMenuList[i].id}`;
                if (result !== this.$route.path)
                    if (valueCounter === i) {
                        this.$router.push({ path: this.getMenuList[i].id });
                        this.pageVal = i;
                    }
            }
        },
    },
    components: { BodyContent },
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
    border: 1px soild red;
}
.Section {
    width: 80%;
    margin-top: 20px;
    font-size: 20pt;
    font-weight: bold;
}
ul {
    list-style: none;
    padding: 0;
}
.orange {
    background: orange;
}
.selectStyle {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    font-size: 13pt;
    border: 0px;
    background-color: #ddd;
    border-radius: 5px;
}
.menuStyle {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ddd;
    height: 760px;
}
</style>
