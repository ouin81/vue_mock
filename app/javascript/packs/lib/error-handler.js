import Vue from 'vue'
export default {
    handleError: (error, vm) => {
        switch (error.response.status) {
            case 400:
                const resData = error.response.data;
                vm.alert.error(vm, resData.errors);
                window._has_error(resData.error_keys);
                break;
        
            default:
                break;
        }
    }
}