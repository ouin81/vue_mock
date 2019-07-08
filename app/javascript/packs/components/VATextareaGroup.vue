<template>
  <div class="form-group">
    <label>{{ title }}</label>
    <va-textarea :rowCount="rowCount" :placeholder="placeholder" :isDisabled="isDisabled" :value="value" :vaId="vaId" @input="updateValue"></va-textarea>
  </div>
</template>

<script>
import VATextarea from "./VATextarea";

export default {
  name: "va-textarea-group",
  methods: {
    updateValue: function(newValue) {
      this.$emit('input', newValue);
    }
  },
  props: {
    title: {
      type: String,
      default: "Textarea"
    },
    rowCount: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String,
      defualt: ""
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
  components: {
    "va-textarea": VATextarea
  }
};
</script>
