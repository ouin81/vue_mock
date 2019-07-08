<template>
  <div class="radio">
    <label>
      <input
        type="radio"
        :name="vaId"
        :id="vaId"
        :checked="isChecked"
        :disabled="isDisabled"
        :value="value"
        v-model="_value_"
      >
      <slot></slot>
    </label>
  </div>
</template>
<script>
export default {
  name: "va-radio",
  props: {
    vaId: {
      type: String
    },
    name: {
      type: String
    },
    value: {
      // type: String,
      // default: ""
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    realVal: {
      // type: 
    }
  },
  created() {},
  methods: {
    updateValue: function(valu) {
      this.$emit('change', this.realVal);
    }
  },
  computed: {
    _value_: {
      get() {
        return this.realVal;
      },
      set(value) {
        this.updateValue()
      }
    }
  }
};
</script>
<style scoped>
.checkbox, .radio {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
