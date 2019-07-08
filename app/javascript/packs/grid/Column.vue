<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'column',
  props: {
   
  },
  inject: ['$validator'],
  created () {

  }
}
</script>
