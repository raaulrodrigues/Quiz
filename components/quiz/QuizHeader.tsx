import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuizHeaderProps {
  current: number;
  total: number;
  score: number;
}

export function QuizHeader({ current, total, score }: QuizHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.progressText}>
        Pergunta {current + 1} de {total}
      </Text>
      <Text style={styles.scoreText}>Pontuação: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 18,
    color: '#ecf0f1',
  },
  scoreText: {
    fontSize: 18,
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
});