import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { PrimaryButton } from '../components/ui/PrimaryButton'; 

const categories = [
  { name: 'Esporte', id: 21 },
  { name: 'História', id: 23 },
  { name: 'Geografia', id: 22 },
  { name: 'Videogames', id: 15 },
  { name: 'Música', id: 12 },
  { name: 'Animes & Mangá', id: 31 },
];

export default function TelaInicial() {
  const router = useRouter();

  const handlePress = (categoryId: number) => {
    router.push({
      pathname: '/quiz',
      params: { categoryId: categoryId },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
      <View style={styles.menu}>
        {categories.map((cat) => (
          <PrimaryButton
            key={cat.id}
            title={cat.name}
            onPress={() => handlePress(cat.id)}
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 40,
  },
  menu: {
    width: '100%',
  },
});