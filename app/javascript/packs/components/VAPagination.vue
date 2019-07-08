<template>
  <div class="box-tools pull-right" v-if="total_pages > 1">
    <ul class="pagination pagination-sm inline">
      <li class="page-item">
        <span class="page-link" @click="click(1)">&laquo;</span>
      </li>
      <li class="page-item" v-for="(page, index) in display_pages" :key="index">
        <span class="page-link" @click="click(page)" :class="{active: current_page_index == page}">{{page}}</span>
      </li>
      <li class="page-item">
        <span class="page-link" @click="click(total_pages)">&raquo;</span>
      </li>
    </ul>
    <div class="input-group input-group-sm inline" v-if="isShowNoInput">
      <input type="number" class="form-control page_number_text inline">
    </div>
  </div>
</template>

<script>
export default {
  name: "va-pagination",
  props: {
    // pagination: {
    //   type: Object,
    //   default: {}
    // },
    perPage: {
      type: Number,
      default: 15
    },
    totalCount: {
      type: Number,
      default: 0
    },
    pageIndex: {
      type: Number,
      default: 1
    },

    isShowNoInput: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click(page_index) {
      this.current_page_index = page_index;
      this.$emit('click', page_index);
    },
    calPages() {
      return Math.ceil(this.totalCount / this.perPage);
    },
    

  },
  mounted() {
    this.current_page_index = Math.max(this.pageIndex, 1);
  },
  computed: {
    total_pages() {
      return this.calPages();
    },
    display_pages() {
      const total_pages = this.calPages();
      const display_pages_cnt = 10;

      var from = Math.max(this.current_page_index - display_pages_cnt / 2, 0);
      var to =  Math.min(from + display_pages_cnt, total_pages);
      from = Math.max(Math.min(to - display_pages_cnt, to), 0);
      return Array.from({length: to - from}, (x,i) => i + from + 1);
    }
  },
  created() {},
  data() {
      return {
        current_page_index: 1
      }
  }

};
</script>
<style scoped>
.page-item .page-link.active {
  background-color: #007bff;
  color: #fff;
}
.page-item .page-link {
  cursor:pointer;
}
.page_number_text {
    width: 3.5em;
    padding: 5px 0px 5px 5px;
    font-size: 12px;
    border-radius: 3px !important;
}
</style>

