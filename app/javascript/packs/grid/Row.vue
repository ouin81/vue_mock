<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'row',
  created () {

  },
  inject: ['$validator'],
}
</script>
