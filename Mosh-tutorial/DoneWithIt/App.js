import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text>How fast is it </Text>
      <Text style={{fontSize: 25}}>{count}</Text>
      <Button title="Click me" onPress={() => setCount(count+1)} color={"#004781"} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b79d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
