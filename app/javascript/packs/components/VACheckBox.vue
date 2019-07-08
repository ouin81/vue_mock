<template>
  <div v-if="isHorizontal" class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox" :id="vaId" :name="vaId" :disabled="isDisabled" v-model="_value_">
          {{ text }}
        </label>
      </div>
    </div>
  </div>
  <div v-else class="checkbox">
    <label>
      <input type="checkbox" :disabled="isDisabled" v-model="_value_">
      {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  name: "va-checkbox",
  props: {
    vaId: {
      type: String
    },
    text: {
      type: String,
      default: "Check me out"
    },
    realVal: {
      // type: String
    },
    isHorizontal: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  created() {},
  methods: {
    updateValue: function(value) {
      var newArr = this.value.concat();
      if(!value) {
        newArr = newArr.filter(n => n !== this.realVal);
      } else {
        newArr.push(this.realVal);
      }
      this.$emit('change', newArr);
    }
  },
  computed: {
    _value_: {
      get() {
        return this.value.includes(this.realVal);
      },
      set(value) {
        this.updateValue(value)
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
