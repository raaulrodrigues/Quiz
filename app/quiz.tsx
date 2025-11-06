import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchQuizQuestions, Question } from '../services/ApiService';
import { LoadingQuiz } from '../components/quiz/LoadingQuiz';
import { QuizHeader } from '../components/quiz/QuizHeader';
import { QuestionCard } from '../components/quiz/QuestionCard';
import { AnswerButton } from '../components/quiz/AnswerButton';

export default function TelaQuiz() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const categoryId = Number(params.categoryId);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryId) return;
    loadQuestions();
  }, [categoryId]);

  const loadQuestions = async () => {
    try {
      setIsLoading(true);
      const fetchedQuestions = await fetchQuizQuestions(categoryId);
      setQuestions(fetchedQuestions);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as perguntas.', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;

    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedAnswer(null);
      } else {
        router.replace({
          pathname: '/resultado',
          params: {
            score: score + (correct ? 1 : 0),
            total: questions.length,
          }
        });
      }
    }, 1000);
  };

  const getButtonState = (answer: string) => {
    if (!selectedAnswer) {
      return 'default';
    }
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      return 'correct';
    }
    if (answer === selectedAnswer) {
      return 'incorrect';
    }
    return 'disabled';
  };

  if (isLoading) {
    return <LoadingQuiz />;
  }

  if (questions.length === 0) {
    return <LoadingQuiz />; // Pode criar um componente "Erro" aqui
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.container}>
      <QuizHeader
        current={currentQuestionIndex}
        total={questions.length}
        score={score}
      />
      
      <QuestionCard question={currentQuestion.question} />

      <View style={styles.optionsContainer}>
        {currentQuestion.answers.map((answer, index) => (
          <AnswerButton
            key={index}
            title={answer}
            onPress={() => handleAnswer(answer)}
            state={getButtonState(answer)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    padding: 20,
  },
  optionsContainer: {
    width: '100%',
  },
});