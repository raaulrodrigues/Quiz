import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonState = 'default' | 'correct' | 'incorrect' | 'disabled';

interface AnswerButtonProps {
  title: string;
  onPress: () => void;
  state: ButtonState;
}

export function AnswerButton({ title, onPress, state }: AnswerButtonProps) {
  const getButtonColor = () => {
    switch (state) {
      case 'correct':
        return styles.correctButton;
      case 'incorrect':
        return styles.incorrectButton;
      case 'disabled':
        return styles.disabledButton;
      default:
        return styles.optionButton;
    }
  };

  return (
    <TouchableOpacity
      style={getButtonColor()}
      onPress={onPress}
      disabled={state !== 'default'}
    >
      <Text style={styles.optionText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  correctButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  incorrectButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#95a5a6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});