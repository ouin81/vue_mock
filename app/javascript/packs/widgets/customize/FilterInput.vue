<template>
    <div class="box-body operator-filter" :class="{'open' : items.length > 0}">
        <input :id="name" autocomplete="off" @input="filte_items" @focus="filte_items" v-model="value" type="text" class="form-control" :placeholder="placeholder" :aria-expanded="items.length > 0">
        <ul class="dropdown-menu" v-if="items.length > 0">
            <li v-for="(item, item_index) in items" :key="item_index"><div @click="option_choose(item)">{{get_option(item)}}</div></li> 
        </ul>
    </div>
</template>
<script>
export default {
    name: "filter_input",
    props: {
        name: {
            type: String,
            default: "filter_input"
        },
        display_attr: {
            type: String
        },
        placeholder: {
            type: String,
            default: "Input."
        },
        data_soruce: {
            type: Array
        },
        filter: {
            type: Function,
            default: () => {}
        }
    },
    //common components are imported at lib/global.js
    components: { },
    methods: {
        option_choose(item) {
            this.items = [];
            this.value = "";
            this.$emit('option_choose', item);
        },
        filte_items() {
            // const value = event.target.value.trim().toLowerCase();
            if (!this.value) {
                this.items = [];
                return;
            }
            this.items = this.data_soruce.filter(this.filter(this.value));
        },
        get_option(item) {
            return item[this.display_attr];
        }
    },
    computed: { },
    watch: { },
    //https://jp.vuejs.org/v2/api/#オプション-ライフサイクルフック
    created() { },
    mounted() { },
    data() {
        return {
            items: [],
            value: ""
        };
    }
}
</script>
<style scoped>
.operator-filter .dropdown-menu {
    top: initial;
    left: initial;
}
.operator-filter .dropdown-menu>li>div:hover {
    background-color: #e1e3e9;
    color: #333
}
.operator-filter .dropdown-menu>li>div {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #777;
    white-space: nowrap;
    cursor: pointer;
}
</style>
