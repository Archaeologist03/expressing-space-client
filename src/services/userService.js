import axios from 'axios';

export const loginUserService = async (request) => {
  const LOGIN_API_ENDPOINT = '/auth/login';

  try {
    const response = await axios.post(LOGIN_API_ENDPOINT, request.payload);

    if (response.data.token) {
      return response.data;
    }
  } catch (err) {
    return Promise.reject(err.response.data);
  }
};
