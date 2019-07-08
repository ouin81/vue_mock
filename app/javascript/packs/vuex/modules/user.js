import * as types from "../mutation-types";

const state = {
  main: {
    name: '',
    role: '',
    roles: [],
    state: {
      color: '',
      name: ''
    },
    createdAt: new Date()
  }
}

const mutations = {
  [types.FETCH_USER](state, user) {
    state.main = user
  }
}

export default {
  state,
  mutations
}
