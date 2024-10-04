const BASE_URL = process.env.PORTAL_API_URL;

const endpoints = {
  SIGNIN: `${BASE_URL}/mock/signin`,
  REGISTER: `${BASE_URL}/mock/register`,
  PROFILE: `${BASE_URL}/mock/profile`,
  RESTAURANT: `${BASE_URL}/mock/restaurant`,
};
export default endpoints;
