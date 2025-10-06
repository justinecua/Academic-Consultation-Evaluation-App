import axios from 'axios';
import API_URL from '../urls/urls';

export async function submitEvaluation(data, token) {
  try {
    const response = await axios.post(`${API_URL}/evaluation/submit/`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Something went wrong' };
  }
}

export const getQuestions = async token => {
  try {
    const res = await axios.get(`${API_URL}/evaluation/questions/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch questions' };
  }
};

export async function getEvaluationCount(token) {
  const res = await axios.get(`${API_URL}/evaluation/count/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.count;
}

export async function getUserEvaluations(token) {
  const res = await axios.get(`${API_URL}/evaluation/my-evaluations/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function getEvaluationDetail(token, id) {
  const res = await axios.get(`${API_URL}/evaluation/my-evaluations/${id}/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export const downloadEvaluationPDF = async (token, id) => {
  const res = await fetch(
    `${API_URL}/evaluation/my-evaluations/${id}/download/`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) throw new Error('Failed to fetch PDF');

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer).toString('base64');
};
