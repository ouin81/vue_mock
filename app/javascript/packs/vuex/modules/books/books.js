import router from './../../../router'
// put customize api here
// import api from './../../api/books/books'
import api from './../../../lib/api_common'
import error_handler from './../../../lib/error-handler'


const types = {
    FETCH_BOOKS: 'FETCH_BOOKS',
    GET_BOOK: 'GET_BOOK',
    UPDATE_BOOK: 'UPDATE_BOOK',
    DELETE_BOOK: 'DELETE_BOOK',
    INIT_BOOK: 'INIT_BOOK',
}

const state = {
    books: [{
            id: '1',
            name: 'MyString',
            author: 'MyString',
            published: 'false',
            published_at: '2019-07-08',
            stock: '1',
            published_by: 'MyString',
            price: '1',
            comment: 'MyString',
    }],
    book: {
            id: '1',
            name: 'MyString',
            author: 'MyString',
            published: 'false',
            published_at: '2019-07-08',
            stock: '1',
            published_by: 'MyString',
            price: '1',
            comment: 'MyString',
    },
    default: {
            id: null,
            name: null,
            author: null,
            published: null,
            published_at: null,
            stock: null,
            published_by: null,
            price: null,
            comment: null,
            created_at: null,
            updated_at: null,
    },
    pagination: {
        totalCount: 0
    }
}

const mutations = {
    [types.FETCH_BOOKS](state, data) {
        state.books = data.books;
        state.pagination.totalCount = data.totalCount || 0;
    },

    [types.GET_BOOK](state, data) {
        state.book = data;
    },

    [types.UPDATE_BOOK](state, payload) {
        this._vm.$set(state.book, payload.key, payload.val);
    },

    [types.DELETE_BOOK](state, payload) {
        const index = state.books.map(book => {
                return book.id;
            }).indexOf(payload.id);
        state.books.splice(index, 1);
    },

    [types.INIT_BOOK](state, payload) {
        Object.assign(state.book, state.default);
    },

}

const getters = {
    books: (state, getters, rootState, rootGetters) => {
        return state.books
    },

    book: (state, getters, rootState, rootGetters) => {
        return state.book
    },

    default: (state, getters, rootState, rootGetters) => {
        return state.default;
    },

    pagination: (state, getters, rootState, rootGetters) => {
        return state.pagination;
    }
}

const actions = {
    initBook({ commit }, payload = {}) {
        commit(types.INIT_BOOK, payload);
    },

    fetchBooks({ commit }, payload = {}) {
        api.fetch_paging(payload, '/books').then((response)=>{
            commit(types.FETCH_BOOKS, response.data);
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    },

    getBook({ commit }, payload = {}) {
        api.get(payload, '/books/' + payload.id + '.json').then((response)=>{
            commit(types.GET_BOOK, response.data);
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    },

    updateBook({commit}, payload = {}) {
        commit(types.UPDATE_BOOK, payload)
    },

    patchBook({commit}, payload = {}) {
        api.patch(payload, '/books/' + payload.book.id + '.json').then((response)=>{
            const data = response.data;
            if(data.status == "SUCCESS") {
                // commit(types.GET_BOOK, response.data);
                this._vm.alert.success(this._vm, "Success.", () => {
                    router.push({name: 'BookIndex'});
                });
            }
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    },

    createBook({commit}, payload = {}) {
        api.post(payload, '/books.json').then((response)=>{
            const data = response.data;
            if(data.status == "SUCCESS") {
                // commit(types.GET_BOOK, response.data);

                this._vm.alert.success(this._vm, "Success.", () => {
                    router.push({name: 'BookIndex'});
                });
            }
        }).catch((error) => {
            error_handler.handleError(error, this._vm);
        });
    },

    deleteBook({commit}, payload = {}) {

        api.delete(payload, '/books/' + payload.id + '.json').then((response)=>{
            // commit(types.DELETE_BOOK, payload)

            this._vm.alert.success(this._vm, "Success.", () => {
                router.push({name: 'BookIndex'});
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
