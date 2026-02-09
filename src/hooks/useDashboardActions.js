export const useDashboardActions = navigation => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const goToConsultation = () => navigation.navigate('Consultation');
  const goToEvaluation = () => navigation.navigate('Evaluation');
  const goToConsultationList = () => navigation.navigate('ConsultationList');
  const goToEvaluationList = () => navigation.navigate('EvaluationList');

  return {
    getGreeting,
    goToConsultation,
    goToEvaluation,
    goToConsultationList,
    goToEvaluationList,
  };
};
