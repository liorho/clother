import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Loading() {
  return <Text style={styles.baseText}>LOADING...</Text>;
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Didot',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
