import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { fromTempToAdjective, fromDescriptionToAdjective, timeRefactor } from '../utils';

export default function LikedTip({ like: { tempInC, description, clothes, time }, index }) {
  time = timeRefactor(time);
  const tempAdjective = fromTempToAdjective(tempInC),
    descAdjective = fromDescriptionToAdjective[description];
  return (
    <Text style={styles.titleText}>
      {index}. {time}: A {clothes} on a {tempAdjective} and {descAdjective} day
    </Text>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 15,
  },
});
