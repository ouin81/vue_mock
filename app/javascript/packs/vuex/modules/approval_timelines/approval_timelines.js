import router from './../../../router'
// put customize api here
// import api from './../../api/approval_timelines/approval_timelines'
import api from './../../../lib/api_common'
import error_handler from './../../../lib/error-handler'


const types = {
    FETCH_APPROVAL_TIMELINES: 'FETCH_APPROVAL_TIMELINES',
    GET_APPROVAL_TIMELINE: 'GET_APPROVAL_TIMELINE',
    UPDATE_APPROVAL_TIMELINE: 'UPDATE_APPROVAL_TIMELINE',
    DELETE_APPROVAL_TIMELINE: 'DELETE_APPROVAL_TIMELINE',
    INIT_APPROVAL_TIMELINE: 'INIT_APPROVAL_TIMELINE',
}

const state = {
    approval_timelines: [{
            id: '1',
            approval_id: '1',
            user_id: '1',
            content: 'MyString',
            operate_type: '1',
    }],
    approval_timeline: {
            id: '1',
            approval_id: '1',
            user_id: '1',
            content: 'MyString',
            operate_type: '1',
    },
    default: {
            id: null,
            approval_id: null,
            user_id: null,
            content: null,
            operate_type: null,
            created_by: null,
            updated_by: null,
            created_at: null,
            updated_at: null,
    },
    pagination: {
        totalCount: 0
    }
}

const mutations = {
    [types.FETCH_APPROVAL_TIMELINES](state, data) {
        state.approval_timelines = data.approval_timelines;
        state.pagination.totalCount = data.totalCount || 0;
    },

    [types.GET_APPROVAL_TIMELINE](state, data) {
        state.approval_timeline = data;
    },

    [types.UPDATE_APPROVAL_TIMELINE](state, payload) {
        this._vm.$set(state.approval_timeline, payload.key, payload.val);
    },

    [types.DELETE_APPROVAL_TIMELINE](state, payload) {
        const index = state.approval_timelines.map(approval_timeline => {
                return approval_timeline.id;
            }).indexOf(payload.id);
        state.approval_timelines.splice(index, 1);
    },

    [types.INIT_APPROVAL_TIMELINE](state, payload) {
        Object.assign(state.approval_timeline, state.default);
    },

}

const getters = {
    approval_timelines: (state, getters, rootState, rootGetters) => {
        return state.approval_timelines
    },

    approval_timeline: (state, getters, rootState, rootGetters) => {
        return state.approval_timeline
    },

    default: (state, getters, rootState, rootGetters) => {
        return state.default;
    },

    pagination: (state, getters, rootState, rootGetters) => {
        return state.pagination;
    }
}

const actions = {
    initApprovalTimeline({ commit }, payload = {}) {
        commit(types.INIT_APPROVAL_TIMELINE, payload);
    },

    fetchApprovalTimelines({ commit }, payload = {}) {
        api.fetch_paging(payload, '/approval_timelines').then((response)=>{
            commit(types.FETCH_APPROVAL_TIMELINES, response.data);
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    },

    getApprovalTimeline({ commit }, payload = {}) {
        api.get(payload, '/approval_timelines/' + payload.id + '.json').then((response)=>{
            commit(types.GET_APPROVAL_TIMELINE, response.data);
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    },

    updateApprovalTimeline({commit}, payload = {}) {
        commit(types.UPDATE_APPROVAL_TIMELINE, payload)
    },

    patchApprovalTimeline({commit}, payload = {}) {
        api.patch(payload, '/approval_timelines/' + payload.approval_timeline.id + '.json').then((response)=>{
            const data = response.data;
            if(data.status == "SUCCESS") {
                // commit(types.GET_APPROVAL_TIMELINE, response.data);
                this._vm.alert.success(this._vm, "Success.", () => {
                    router.push({name: 'ApprovalTimelineIndex'});
                });
            }
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    },

    createApprovalTimeline({commit}, payload = {}) {
        api.post(payload, '/approval_timelines.json').then((response)=>{
            const data = response.data;
            if(data.status == "SUCCESS") {
                // commit(types.GET_APPROVAL_TIMELINE, response.data);

                this._vm.alert.success(this._vm, "Success.", () => {
                    router.push({name: 'ApprovalTimelineIndex'});
                });
            }
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    },

    deleteApprovalTimeline({commit}, payload = {}) {

        api.delete(payload, '/approval_timelines/' + payload.id + '.json').then((response)=>{
            // commit(types.DELETE_APPROVAL_TIMELINE, payload)

            this._vm.alert.success(this._vm, "Success.", () => {
                router.push({name: 'ApprovalTimelineIndex'});
            });
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    }
    
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
