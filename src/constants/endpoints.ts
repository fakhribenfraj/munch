const BASE_URL = process.env.PORTAL_API_URL;
const endpoints = {
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  REGISTER: `${BASE_URL}/register`,
  PROFILE: `${BASE_URL}/profile`,
  RESTAURANTS: `${BASE_URL}/restaurants`,
};
export default endpoints;
