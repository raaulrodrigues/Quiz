import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { ResultCard } from '../components/ResultCard';

export default function TelaResultado() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const score = Number(params.score);
  const total = Number(params.total);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Resultado Final</Text>
      
      <ResultCard score={score} total={total} />

      <PrimaryButton
        title="Jogar Novamente"
        onPress={() => router.replace('/')}
        style={{ width: '90%' }} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 40,
  },
});