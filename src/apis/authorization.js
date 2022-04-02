import { apiHelper } from "../utils/axios";

const useAPI = {
  signin({ email, password }) {
    return apiHelper.post('/signin', { email, password })
  },
  signup({ name, email, password, passwordCheck }) {
    return apiHelper.post('signup', { name, email, password, passwordCheck })
  }
}

export default useAPI