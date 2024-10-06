const BASE_URL = process.env.PORTAL_API_URL;
const MOCK_URL = "https://localhost:3000/api ";
const endpoints = {
  SIGNIN: `${MOCK_URL}/mock/signin`,
  REGISTER: `${MOCK_URL}/mock/register`,
  PROFILE: `${MOCK_URL}/mock/profile`,
  RESTAURANTS: `${BASE_URL}/restaurants`,
};
export default endpoints;
