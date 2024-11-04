const BASE_URL = `${process.env.PORTAL_API_URL}/api`;
const endpoints = {
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  REGISTER: `${BASE_URL}/register`,
  PROFILE: `${BASE_URL}/profile`,
  RESTAURANTS: `${BASE_URL}/restaurants`,
  INGREDIENTS: `${process.env.INGREDIENTS_URL}`,
};
export default endpoints;
