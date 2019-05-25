import axios from "@/assets/js/axios.js"

export default {
  //  post
  post(data) {
    return axios.post(`/tableList`,data)
  },
  //  get
  get (data) {
    return axios.get(`/tableHeader${data}`)
  },
}
