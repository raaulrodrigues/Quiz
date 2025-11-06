import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ResultCardProps {
  score: number;
  total: number;
}

export function ResultCard({ score, total }: ResultCardProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <View style={styles.resultBox}>
      <Text style={styles.scoreText}>
        Você acertou {score} de {total} perguntas!
      </Text>
      <Text style={styles.percentageText}>{percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultBox: {
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    width: '90%',
  },
  scoreText: {
    fontSize: 20,
    color: '#2c3e50',
    fontWeight: '500',
    marginBottom: 10,
  },
  percentageText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3498db',
  },
});