// import * as types from '../mutation-types'
import axios from 'axios'

const types = {
    FETCH_APPLS: 'FETCH_APPLS',
    FETCH_APPL: 'FETCH_APPL',
    UPDATE_APPL: 'UPDATE_APPL'
}

const state = {
    appls: [{
        id: "1",
        user_id: "MyString",
        title: "MyString",
        state: "1",
        description: "MyText",
        checked: "false",
    }],
    appl: {
        id: "1",
        user_id: "MyString",
        title: "MyString",
        state: "1",
        description: "MyText",
        checked: "false",
    },
    pagination: {
        totalCount: 0
    }
}

const mutations = {
    [types.FETCH_APPLS](state, data) {
        state.appls = data.appls;
        state.pagination.totalCount = data.totalCount
    },
    [types.FETCH_APPL](state, data) {
        state.appl = data
    },
    [types.UPDATE_APPL](state, payload) {
        this._vm.$set(state.appl, payload.key, payload.val);
    }

}

const getters = {
    appls: (state, getters, rootState, rootGetters) => {
        return state.appls
    },

    appl: (state, getters, rootState, rootGetters) => {
        return state.appl
    },

    pagination: (state, getters, rootState, rootGetters) => {
        return state.pagination;
    }
}

const actions = {
    fetchAppls({ commit }, page = 0) {
        this._vm.axios.get(window.paginate_url("/appls", page), {
            requestParam: { },
            handleRes: response => {
                commit(types.FETCH_APPLS, response.data);
            },
            handleError: error => {
                this._vm.alert.error(this._vm, [error.response.data.message || error]);
            }
        });
    },

    fetchAppl({ commit }, id = 0) {
        return axios.get('/appls/' + id + '.json', {})
            .then((response) => {
                commit(types.FETCH_APPL, response.data)
            }).catch((error) => Promise.reject(error))
    },

    updateAppl({commit}, payload) {
        commit(types.UPDATE_APPL, payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
