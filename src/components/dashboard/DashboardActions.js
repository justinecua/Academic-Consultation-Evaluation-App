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
          icon={<NotebookPen size={24} color="#5E72E4" />}
          onPress={goToConsultation}
          color="#5E72E4"
        />

        <ActionCard
          title="Create Evaluation"
          description="Evaluate a Faculty or Personnel"
          icon={<MessageSquareText size={24} color="#5E72E4" />}
          onPress={goToEvaluation}
          color="#5E72E4"
        />

        <ActionCard
          title="View Consultations"
          description={`Manage ${consultCount} submitted consultations`}
          icon={<BarChart3 size={24} color="#38A169" />}
          onPress={goToConsultationList}
          color="#38A169"
        />

        <ActionCard
          title="View Evaluations"
          description={`Manage ${evalCount} submitted evaluations`}
          icon={<ClipboardList size={24} color="#11C8EF" />}
          onPress={goToEvaluationList}
          color="#11C8EF"
        />
      </View>
    </View>
  );
};

export default DashboardActions;
