<template>
  <div class="box" :class="[theme, this.isOpen?'':'collapsed-box', isSolid?'box-solid':'']">
    <div class="box-header" :class="(isBorder || isSolid)?'with-border':''">
      <slot name="icon-title"></slot>
      <h3 class="box-title">{{ title }}</h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool pull-right" :data-widget="widgetType" v-if="withHeaderButton">
          <i :class="btnIcon"></i>
        </button>
        <slot name="pagination" v-if="$slots.pagination"></slot>
      </div>
      <!-- /.box-tools -->
    </div>
    <!-- <div v-if="$slots.header" class="box-header">
      <slot name="header"></slot>
    </div> -->
    <!-- /.box-header -->
    <div class="box-body">
      <slot name="content"></slot>
    </div>
    <!-- /.box-body -->

    <div v-if="$slots.footer" class="box-footer">
      <slot name="footer"></slot>
    </div>

    <div v-if="this.isLoading" class="overlay">
      <i class="fa fa-refresh fa-spin"></i>
    </div>
  </div>
  <!-- /.box -->
</template>

<script>
export default {
  name: "va-box",
  inject: ['$validator'],
  props: {
    widgetType: {
      type: String,
      // default: "collapse"
    },
    withHeaderButton: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    theme: {
      type: String
    },
    isOpen: {
      type: Boolean,
      default: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isSolid: {
      type: Boolean,
      default: false
    },
    isBorder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnIcon() {
      if (this.widgetType === "collapse") {
        return this.isOpen ? "fa fa-minus" : "fa fa-plus";
      } else if (this.widgetType === "remove") {
        return "fa fa-times";
      }
      return "";
    }
  },
  created() {}
};
</script>
