import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyButton from "./ByButton";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up  to start working on your app!</Text>
      <StatusBar style="auto" />
      <MyButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
