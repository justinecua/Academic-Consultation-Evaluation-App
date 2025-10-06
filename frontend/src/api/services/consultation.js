import axios from 'axios';
import API_URL from '../urls/urls';

export async function submitConsultation(data, token) {
  try {
    const response = await axios.post(`${API_URL}/consultation/submit/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Something went wrong' };
  }
}

export async function getUserConsultations(token) {
  try {
    const response = await axios.get(
      `${API_URL}/consultation/my-consultations/`,
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
      `${API_URL}/consultation/my-consultations/${id}/`,
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
      `${API_URL}/consultation/my-consultations/${id}/delete/`,
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
      `${API_URL}/consultation/my-consultations/${id}/pdf/`,
      {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'arraybuffer', // <-- change this
      },
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to download PDF' };
  }
}
