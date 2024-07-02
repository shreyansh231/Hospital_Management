import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Appointment() {
  return (
    <View style={styles.container}>
      <Text>Appointment Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});