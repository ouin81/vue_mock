/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import './lib/css'
import './lib/script'
import './lib/global'


import Vue from 'vue'
import VeeValidate, { Validator } from "vee-validate";
import zh_CN from "vee-validate/dist/locale/zh_CN";
import ja from 'vee-validate/dist/locale/ja'
import en from 'vee-validate/dist/locale/en'
import dictionary from './lib/veevalidate_dictionary'

import VueI18n from 'vue-i18n'
import router from './router'
import App from './app'
import store from "./vuex/store.js";

import EventBus from './lib/eventBus.js'
import axios from 'axios'
import VueAxiosPlugin from './lib/vue-axios.js'
import Alert from './lib/alert.js'
import Modal from './lib/modal.js'

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

Vue.use(VeeValidate, {useConstraintAttrs: false, locale: 'ja',
    // events: 'change|validate'
});
Validator.localize("en", en);
Validator.localize("zh-CN", zh_CN);
Validator.localize("ja", ja);
// Validator I18n
Validator.localize(dictionary);

Vue.use(VueI18n)
Vue.use(Alert)
Vue.use(Modal)
Vue.use(VueAxiosPlugin, { axios: axios, csrfToken: function(){
    return $('meta[name=csrf-token]').attr('content');
} });

const messages = {}
const i18n = new VueI18n({
    locale: 'ja',
    messages
});
Validator.localize('ja')

$(() => {
    axios.get("/common/i18n.json", {})
    .then((response) => {
        const data = response.data;
        const langs = data.langs;
        Object.keys(langs).forEach(locale => {
            i18n.setLocaleMessage(locale, langs[locale]);
        });
        i18n.locale = data.locale;
    })
    const app = new Vue({
        i18n,
        router,
        store,
        render: h => h(App)
    }).$mount("#app").$nextTick(function () {
        setTimeout(() => {
            $.AdminLTE.layout.fix();
        }, 100);
    });
});


