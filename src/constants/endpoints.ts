const BASE_URL = `https://${process.env.PORTAL_API_URL}/api`;
const endpoints = {
  LOGIN: `${BASE_URL}/login`,
  LOGOUT: `${BASE_URL}/logout`,
  REGISTER: `${BASE_URL}/register`,
  PASSWORD: `${BASE_URL}/password`,
  PROFILE: `${BASE_URL}/profile`,
  RESTAURANTS: `${BASE_URL}/restaurants`,
  INGREDIENTS: `${process.env.INGREDIENTS_URL}`,
};
export default endpoints;
