import axios from 'axios';
import Config from 'react-native-config';
const BACKEND_API_URL = Config.BACKEND_API_URL;

export async function submitEvaluation(data, token) {
  try {
    const response = await axios.post(
      `${BACKEND_API_URL}/evaluation/submit/`,
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

export const getQuestions = async token => {
  try {
    const res = await axios.get(`${BACKEND_API_URL}/evaluation/questions/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch questions' };
  }
};

export async function getEvaluationCount(token) {
  const res = await axios.get(`${BACKEND_API_URL}/evaluation/count/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.count;
}

export async function getUserEvaluations(token) {
  const res = await axios.get(`${BACKEND_API_URL}/evaluation/my-evaluations/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function getEvaluationDetail(token, id) {
  const res = await axios.get(
    `${BACKEND_API_URL}/evaluation/my-evaluations/${id}/`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return res.data;
}

export async function downloadEvaluationPDF(token, id) {
  try {
    const response = await axios.get(
      `${BACKEND_API_URL}/evaluation/my-evaluations/${id}/download/`,
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
