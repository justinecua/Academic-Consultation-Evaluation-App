import React from 'react';
import { ScrollView, View } from 'react-native';

const ScreenContainer = ({ children }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#f3f6fa',
      }}
    >
      <View
        style={{
          marginTop: -20,
          minHeight: '100%',
          padding: 12,
        }}
      >
        {children}
      </View>
    </ScrollView>
  );
};

export default ScreenContainer;
