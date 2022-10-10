import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './Screens';

export default function App() {
  return (
    <><StatusBar style='dark' /><NavigationContainer style={styles.container}>
      <Screens />
    </NavigationContainer></>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

