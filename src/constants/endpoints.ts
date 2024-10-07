const BASE_URL = process.env.PORTAL_API_URL;
const MOCK_URL = process.env.MOCK_PORTAL_API_URL;
const endpoints = {
  SIGNIN: `${MOCK_URL}/signin`,
  REGISTER: `${MOCK_URL}/register`,
  PROFILE: `${MOCK_URL}/profile`,
  RESTAURANTS: `${BASE_URL}/restaurants`,
};
export default endpoints;
