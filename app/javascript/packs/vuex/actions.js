import * as types from './mutation-types'
import { services } from './api'

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products.getAll()
    .then((response) => {
      console.log(response)
      commit(types.FETCH_PRODUCT, response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}

export const fetchUser = ({ commit }) => {
  return services.user_info.getCurrentUser()
    .then((response) => {
        let currentUser = response.data;
        // let code = [];
        // let name = [];

        // currentUser.name = [currentUser.first_name, currentUser.middle_name, currentUser.last_name].join(" ").trim();
        commit(types.FETCH_USER, currentUser)
    })
    .catch((error) => {
        console.error(error)
    })
}
