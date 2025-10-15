import axios from 'axios';
import Config from 'react-native-config';
const BACKEND_API_URL = Config.BACKEND_API_URL;

console.log('BACKEND_API_URL:', BACKEND_API_URL);
export async function login(username, password) {
  try {
    const response = await axios.post(`${BACKEND_API_URL}/login/`, {
      username,
      password,
    });
    const { access, refresh, user } = response.data;
    return { access, refresh, user };
  } catch (error) {
    throw error;
  }
}

export async function getProfile(token) {
  try {
    const response = await axios.get(`${BACKEND_API_URL}/profile/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function logout(refreshToken, accessToken) {
  try {
    const response = await axios.post(
      `${BACKEND_API_URL}/logout/`,
      { refresh: refreshToken },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
