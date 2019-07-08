<template>
  <textarea class="form-control" :id="vaId" :name="vaId" :rows="rowCount" :placeholder="placeholder" :disabled="isDisabled" v-model="_value_"></textarea>
</template>

<script>
export default {
  name: "va-textarea",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    rowCount: {
      type: Number,
      default: 3
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    vaId: {
      type: String
    },
  },
  created() {},
  methods: {
    updateValue: function(newValue) {
      this.$emit('input', newValue);
    }
  },
  computed: {
    _value_: {
      get() {
        return this.value
      },
      set(value) {
        this.updateValue(value)
      }
    },
  }
};
</script>
