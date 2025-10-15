import axios from 'axios';
import Config from 'react-native-config';
const BACKEND_API_URL = Config.BACKEND_API_URL;

export async function submitConsultation(data, token) {
  try {
    const response = await axios.post(
      `${BACKEND_API_URL}/consultation/submit/`,
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Something went wrong' };
  }
}

export async function getUserConsultations(token) {
  try {
    const response = await axios.get(
      `${BACKEND_API_URL}/consultation/my-consultations/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch consultations' };
  }
}

export async function getConsultationDetail(token, id) {
  try {
    const response = await axios.get(
      `${BACKEND_API_URL}/consultation/my-consultations/${id}/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || { error: 'Failed to fetch consultation detail' }
    );
  }
}

export async function deleteConsultation(token, id) {
  try {
    const response = await axios.delete(
      `${BACKEND_API_URL}/consultation/my-consultations/${id}/delete/`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to delete consultation' };
  }
}

export async function downloadConsultationPDF(token, id) {
  try {
    const response = await axios.get(
      `${BACKEND_API_URL}/consultation/my-consultations/${id}/pdf/`,
      {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'arraybuffer',
      },
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to download PDF' };
  }
}
