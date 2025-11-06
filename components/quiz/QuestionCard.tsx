import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuestionCardProps {
  question: string;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
    minHeight: 150,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
});