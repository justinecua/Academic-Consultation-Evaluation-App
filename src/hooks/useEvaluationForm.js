import { useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import { submitEvaluation, getQuestions } from '../api/services/evaluation';

export const useEvaluationForm = (accessToken, navigation) => {
  const today = new Date();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showObsDate, setShowObsDate] = useState(false);
  const [showObsTime, setShowObsTime] = useState(false);
  const [showConfDate, setShowConfDate] = useState(false);
  const [showConfTime, setShowConfTime] = useState(false);
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);

  const [formData, setFormData] = useState({
    teacherName: '',
    date: today.toISOString().split('T')[0],
    time: today.toTimeString().split(' ')[0].slice(0, 5),
    college: '',
    roomNumber: '',
    subject: '',
    ratings: {},
    comments: '',
    dateOfConference: '',
    timeOfConference: '',
  });

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions(accessToken);

      const formatted = data.map(q => ({
        id: q.id,
        question: q.text,
        category: q.category,
      }));

      setQuestions(formatted);
    } catch {
      showMessage({ message: 'Failed to refresh questions.', type: 'danger' });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const refresh = async () => {
    setRefreshing(true);
    await fetchQuestions();
  };

  const handleRatingChange = (questionId, rating) => {
    setFormData(prev => ({
      ...prev,
      ratings: { ...prev.ratings, [questionId]: rating },
    }));
  };

  const getAverage = () => {
    const values = Object.values(formData.ratings).filter(v => v !== 'NA');
    if (!values.length) return 0;

    const sum = values.map(Number).reduce((a, b) => a + b, 0);
    return (sum / values.length).toFixed(2);
  };

  const handleSubmit = async () => {
    if (
      !formData.teacherName.trim() ||
      !formData.college.trim() ||
      !formData.subject.trim() ||
      !formData.roomNumber.trim()
    ) {
      showMessage({
        message: 'Please fill out all required fields.',
        type: 'danger',
      });
      return;
    }

    if (!Object.keys(formData.ratings).length) {
      showMessage({
        message: 'Please provide at least one rating.',
        type: 'danger',
      });
      return;
    }

    setSubmitting(true);

    const payload = {
      teacher_name: formData.teacherName,
      college: formData.college,
      subject: formData.subject,
      room_number: formData.roomNumber,
      date: formData.date,
      time_of_observation: formData.time,
      other_comments: formData.comments,
      average_rating: getAverage(),
      date_of_conference: formData.dateOfConference || null,
      time_of_conference: formData.timeOfConference || null,
      responses: Object.entries(formData.ratings).map(([id, rating]) => ({
        question: parseInt(id),
        rating: rating === 'NA' ? 0 : rating,
        remarks: '',
      })),
    };

    try {
      await submitEvaluation(payload, accessToken);

      showMessage({
        message: 'Evaluation submitted successfully.',
        type: 'success',
      });

      navigation.goBack();
    } catch {
      showMessage({ message: 'Submission failed.', type: 'danger' });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    questions,
    loading,
    submitting,
    refreshing,
    formData,
    showObsDate,
    setShowObsDate,
    showObsTime,
    setShowObsTime,
    showConfDate,
    setShowConfDate,
    showConfTime,
    setShowConfTime,
    showCollegeDropdown,
    setShowCollegeDropdown,
    setFormData,
    handleRatingChange,
    handleSubmit,
    refresh,
    getAverage,
  };
};
