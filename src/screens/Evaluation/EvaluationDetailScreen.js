import { useContext } from 'react';
import { ScrollView, RefreshControl, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../styles/evaluationDetailScreen';
import LoadingState from '../../components/evaluation/detail/LoadingState';
import ErrorState from '../../components/evaluation/detail/ErrorState';
import EvaluationHeader from '../../components/evaluation/detail/sections/EvaluationHeader';
import BasicInfoSection from '../../components/evaluation/detail/sections/BasicInfoSection';
import ScheduleSection from '../../components/evaluation/detail/sections/ScheduleSection';
import OverallRatingSection from '../../components/evaluation/detail/sections/OverallRatingSection';
import CommentsSection from '../../components/evaluation/detail/sections/CommentsSection';
import ResponsesSection from '../../components/evaluation/detail/sections/ResponsesSection';

import useEvaluationDetail from '../../hooks/useEvaluationDetail';

export default function EvaluationDetailScreen({ route }) {
  const { id } = route.params;
  const { accessToken } = useContext(AuthContext);
  const { evaluation, loading, refreshing, error, fetchDetail, downloadPDF } =
    useEvaluationDetail(accessToken, id);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState onRetry={() => fetchDetail()} />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 }]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => fetchDetail(true)}
          tintColor="#0D2460"
          colors={['#0D2460']}
        />
      }
      showsVerticalScrollIndicator={false}
    >
      <EvaluationHeader
        teacher={evaluation.teacher_name}
        subject={evaluation.subject}
        onDownload={downloadPDF}
      />

      <BasicInfoSection evaluation={evaluation} />
      <ScheduleSection evaluation={evaluation} />
      <OverallRatingSection evaluation={evaluation} />
      <CommentsSection comments={evaluation.other_comments} />
      <ResponsesSection responses={evaluation.responses_detail} />

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}
