import axios from 'axios'

const BASE_URL ="";

export default {
  paginate_url (targets, page_no) {
    return [targets, page_no ? "/page/" + page_no : "", ".json"].join("");
  },

  async fetch_paging (payload = {}, url) {
    try {
      const response = axios.get(paginate_url(BASE_URL + url, payload.page), {});
      return await Promise.resolve(response);
    }
    catch (error) {
      return await Promise.reject(error);
    }
  },

  async fetch (payload = {}, url) {
    try {
      const response = axios.get(BASE_URL + url, {});
      return await Promise.resolve(response);
    }
    catch (error) {
      return await Promise.reject(error);
    }
  },

  async get (payload = {}, url) {
    try {
      const response = await axios.get(BASE_URL + url, {});
      return await Promise.resolve(response);
    }
    catch (error) {
      return await Promise.reject(error);
    }
  },

  async delete (payload = {}, url) {
    try {
      const response = await axios.delete(BASE_URL + url, {});
      return await Promise.resolve(response);
    }
    catch (error) {
      return await Promise.reject(error);
    }
  },

  async patch (payload = {}, url) {
    try {
      const response = await axios.patch(BASE_URL + url, payload);
      return await Promise.resolve(response);
    }
    catch (error) {
      return await Promise.reject(error);
    }
  },

  async post (payload = {}, url) {
    try {
      const response = await axios.post(BASE_URL + url, payload);
      return await Promise.resolve(response);
    }
    catch (error) {
      return await Promise.reject(error);
    }
  },

  
}
