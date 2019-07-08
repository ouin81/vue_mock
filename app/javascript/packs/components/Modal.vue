<template lang="html">
  <!-- Modal -->
  <div class="modal fade" :id="modalId" :class=[type] tabindex="-1" role="dialog" aria-labelledby="bsModalLabel" data-toggle="modal" data-backdrop="static" data-keyboard="false" @click="clickOverlay">
    <div class="modal-dialog" role="document" @click.stop>
      <div class="modal-content">
        <div class="modal-header" v-if="!onlyBody">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="clickOverlay">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="bsModalLabel">{{title}}</h4>
        </div>
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-if="onlyBody" @click="clickOverlay">
            <span aria-hidden="true">&times;</span>
          </button>
          <div v-html="description" v-if="description"></div>
          <div v-for="(error, index) in display_errors" :key='index' v-if="display_errors.length > 0">{{error}}</div>
          <slot name="body"></slot>
        </div>
        <div class="modal-footer" v-if="!onlyBody">
          <button type="button" :class="['btn', type ? 'btn-outline': 'btn-default']" @click="confirm">{{confirmText}}</button>
          <button type="button" :class="['btn', type ? 'btn-outline': 'btn-default']" @click="cancel">{{cancelText}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const ModalTypes = ['modal-primary', 'modal-success', 'modal-info', 'modal-warning', 'modal-danger']
export default {
  props: { 
    modalId: {
      type: String,
      default: "bsModal"
    },
    eventName: {
      type: String,
      default: "modal-open"
    }
  },
  created() {
  },
  mounted() {
    this.$bus.$off(this.eventName);
    this.$bus.$on(this.eventName, args => {
      this.modalId = args.modalId || this.modalId;
      this.type = args.type;
      this.title = args.title;
      this.description = args.description;
      this.confirmText = args.confirmText || this.$i18n.t('modal.button.ok');
      this.cancelText = args.cancelText || this.$i18n.t('modal.button.cancel');
      this.onlyBody = args.onlyBody || false;
      this.display_errors = Array.isArray(args.errors) ? args.errors : [];
      this.confirmBeforeHook = args.confirmBefore || (() => {});
      this.confirmAfterHook = args.confirmAfter || (() => {});
      this.cancelBeforeHook = args.cancelBefore || (() => {});
      this.cancelAfterHook = args.cancelAfter || (() => {});
      this.clickOverlayHook = args.clickOverlay || (() => {});

      $("#" + this.modalId).modal("show");
    });


    $("#" + this.modalId).on("show.bs.modal", e => {});

    $("#" + this.modalId).on("hidden.bs.modal", e => {
      this.confirmAfterHook();
      this.cancelAfterHook();
      this.resetProperties();
    });

    $("#" + this.modalId).on("overlay.bs.modal", e => {
      this.clickOverlayHook();
    });
  },
  data() {
    return {
      type: "",
      title: "",
      description: "",
      confirmText: "",
      cancelText: "",
      onlyBody: false,
      display_errors: [],
      confirmBeforeHook: () => {},
      confirmAfterHook: () => {},
      cancelBeforeHook: () => {},
      cancelAfterHook: () => {},
      clickOverlayHook: () => {}
    };
  },
  methods: {
    confirm: function() {
      this.cancelAfterHook = () => {};
      $("#" + this.modalId).modal("hide");
    },
    cancel: function() {
      this.confirmAfterHook = () => {};
      $("#" + this.modalId).modal("hide");
    },
    resetProperties: function() {
      this.type = "";
      this.title = "";
      this.description = "";
      this.confirmText = "";
      this.cancelText = "";
      this.onlyBody = false;
      this.display_errors = [];
      this.confirmBeforeHook = () => {};
      this.confirmAfterHook = () => {};
      this.cancelBeforeHook = () => {};
      this.cancelAfterHook = () => {};
    },
    clickOverlay: function() {
      this.cancelAfterHook = () => {};
      this.confirmAfterHook = () => {};

      this.clickOverlayHook();
      $("#" + this.modalId).modal("hide");
    }
  }
};
</script>

<style lang="css">
.modal-dialog {
    margin: 85px auto;
}
</style>
