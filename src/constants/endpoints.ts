const BASE_URL = process.env.PORTAL_API_URL;

const endpoints = {
  SIGNIN: `${BASE_URL}/auth/signin`,
  REGISTER: `${BASE_URL}/auth/register`,
  GET_PROFILE: `${BASE_URL}/auth/profile`,
};
export default endpoints;
