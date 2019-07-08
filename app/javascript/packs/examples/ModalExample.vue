<template lang="html">
  <div class="container">
    <h1>Modal Example</h1>
    <row>
      <div class="col-md-12">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-lg" @click="openModal">
          Launch demo modal
        </button>
      </div>
    </row>
  </div>
</template>

<script>
export default {
  methods: {
    openModal () {
      console.log(this.$bus)
      this.$bus.$emit('modal-open', {
        title: 'Hello',
        description: '内容',
        type: 'modal-primary',
        confirmText: '確定',
        cancelText: 'キャンセル',
        confirmBefore: () => {
          window.alert('Before確定Callback')
        },
        confirmAfter: () => {
          window.alert('After確定Callback')
        },
        cancelBefore: () => {
          window.alert('BeforeキャンセルCallback')
        },
        cancelAfter: () => {
          window.alert('AfterキャンセルCallback')
        },
        clickOverlay: () => {
          window.alert('Overlayがクリックされた。')
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.modal-example .modal {
  position: relative;
  top: auto;
  bottom: auto;
  right: auto;
  left: auto;
  display: block;
  z-index: 1;
}
.modal-example .modal {
  background: transparent !important;
}
</style>
