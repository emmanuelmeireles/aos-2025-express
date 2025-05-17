// Novo arquivo: App.js
import React from 'react';
import { SafeAreaView, Text, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ola, mundo!</Text>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0074D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: width * 0.12, // Responsivo ao tamanho da tela
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});