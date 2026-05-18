import React from 'react';
import { View, Text } from 'react-native';
import {
  MessageSquareText,
  ClipboardList,
  BarChart3,
  NotebookPen,
} from 'lucide-react-native';
import { styles } from '../../styles/dashboardStyle';
import ActionCard from './ActionCard';

const DashboardActions = ({
  evalCount,
  consultCount,
  goToConsultation,
  goToEvaluation,
  goToConsultationList,
  goToEvaluationList,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Options</Text>
      <Text style={styles.sectionSubtitle}>Choose what you'd like to do</Text>

      <View style={styles.actionsContainer}>
        <ActionCard
          title="Start Consultation"
          description="Submit academic consultation form"
          icon={<NotebookPen size={22} color="#0D2460" />}
          onPress={goToConsultation}
          color="#1A4BAD"
          iconBg="#EBF1FC"
        />

        <ActionCard
          title="Create Evaluation"
          description="Evaluate a faculty or personnel"
          icon={<MessageSquareText size={22} color="#0D2460" />}
          onPress={goToEvaluation}
          color="#0D2460"
          iconBg="#E8EDF9"
        />

        <ActionCard
          title="View Consultations"
          description={`Manage ${consultCount} submitted consultations`}
          icon={<BarChart3 size={22} color="#0D2460" />}
          onPress={goToConsultationList}
          color="#0A7ABE"
          iconBg="#E8EDF9"
          count={consultCount}
        />

        <ActionCard
          title="View Evaluations"
          description={`Manage ${evalCount} submitted evaluations`}
          icon={<ClipboardList size={22} color="#0D2460" />}
          onPress={goToEvaluationList}
          color="#3A5490"
          iconBg="#EEF1F8"
          count={evalCount}
        />
      </View>
    </View>
  );
};

export default DashboardActions;
