import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Logo({ errorMsg }) {
  return <Text style={styles.baseText}>Clother</Text>;
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Didot',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
