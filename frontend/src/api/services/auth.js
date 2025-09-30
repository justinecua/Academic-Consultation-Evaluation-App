import axios from 'axios';
import API_URL from '../urls/urls';

export async function login(username, password) {
  try {
    const response = await axios.post(`${API_URL}/login/`, {
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
    const response = await axios.get(`${API_URL}/profile/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
