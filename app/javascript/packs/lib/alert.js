const AlertPlugin = {}
export default AlertPlugin.install = function (Vue) {
    const _alert_ = {
        success (vue, description, clickOverlay = (() => {})) {
            vue.$bus.$emit('modal-open', {
                description: description || 'Success.',
                onlyBody: true,
                type: "modal-success",
                clickOverlay: clickOverlay
              });
        },
        error (vue, errors, clickOverlay = (() => {})) {
            vue.$bus.$emit('modal-open', {
                errors: errors,
                onlyBody: true,
                type: "modal-danger",
                clickOverlay: clickOverlay
              });
        }
    }
    
    Vue.alert = _alert_;

    Object.defineProperties(Vue.prototype, {
        alert: {
            get () {
                return _alert_;
            }
        },
    })
}

