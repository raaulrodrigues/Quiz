import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#34495e" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#34495e',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Escolha um Tema' }} />
        <Stack.Screen name="quiz" options={{ title: 'Quiz' }} />
        <Stack.Screen
          name="resultado"
          options={{ title: 'Resultado', headerLeft: () => null }}
        />
      </Stack>
    </>
  );
}