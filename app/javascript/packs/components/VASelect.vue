<template>
  <div v-if="isHorizontal" class="form-group">
    <label :for="vaId" class="col-sm-2 control-label">{{ title }}</label>
    <div class="col-sm-10">
      <select class="form-control" :disabled="isDisabled" :multiple="isMultiple" :id="vaId" :name="vaId" v-model="_value_">
        <option disabled selected value v-if="isIncludBlank"> {{blankOption()}} </option>
        <option v-for="(option,index) in list" :value="option.value" :key="index">{{ option.text }}</option>
      </select>
    </div>
  </div>
  <select v-else class="form-control" :disabled="isDisabled" :multiple="isMultiple" :id="vaId" :name="vaId" v-model="_value_">
    <option disabled value v-if="isIncludBlank"> -- {{blankOption()}} -- </option>
    <option v-for="(option,index) in list" :value="option.value" :key="index">{{ option.text }}</option>
  </select>
</template>
<script>
  export default {
    name: "va-select",
    props: {
      list: {
        type: Array,
        default: []
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      isMultiple: {
        type: Boolean,
        default: false
      },
      isHorizontal: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
      },
      vaId: {
        type: String
      },
      isIncludBlank: {
        type: Boolean,
        default: true
      },
      value: {

      },
      blankOptionLabel: {
        type: String,
        default: "an option"
      }
    },
    created() {},
    methods: {
      updateValue: function(newValue) {
        this.$emit('change', newValue);
      },
      blankOption() {
        return "-- select " + this.blankOptionLabel + " --"
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