import axios from 'axios'

export default {
  getCurrentUser (request = {}) {
    return axios.get('/users/user_info.json', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
