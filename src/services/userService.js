import axios from 'axios';

export const loginUserService = async (request) => {
  const LOGIN_API_ENDPOINT = 'http://localhost:5000/auth/login';

  try {
    const response = await axios.post(LOGIN_API_ENDPOINT, request.payload);

    console.log(response, 333);

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
