const ModalPlugin = {}
export default ModalPlugin.install = function (Vue) {
    const _modal_ = {
        confirm (vue, description, confirmAfter = (() => {}), cancelAfter = (() => {})) {
            vue.$bus.$emit('modal-open', {
                title: vue.$i18n.t('modal.title.info'),
                description: description,
                type: 'modal-info',
                confirmAfter: confirmAfter,
                cancelAfter: cancelAfter
            });
        },
        warning (vue, description, confirmAfter = (() => {}), cancelAfter = (() => {})) {
            vue.$bus.$emit('modal-open', {
                title: vue.$i18n.t('modal.title.warning'),
                description: description,
                type: 'modal-warning',
                confirmAfter: confirmAfter,
                cancelAfter: cancelAfter
            });
        }
    }
    
    Vue.modal = _modal_;

    Object.defineProperties(Vue.prototype, {
        modal: {
            get () {
                return _modal_;
            }
        },
    })
}

